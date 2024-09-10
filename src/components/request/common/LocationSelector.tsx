import { NationsTable } from '@/database/NationsTable';
import { RegionsTable } from '@/database/RegionsTable';
import { CitiesTable } from '@/database/CitiesTable';
import type { NationInterface, RegionInterface, CityInterface } from '@/interfaces/DatabaseInterfaces';
import type { locationInputInterface } from '@/interfaces/AppInterfaces';

/**
 * Props para el componente LocationSelector.
 */
interface LocationSelectorProps {
  /**
   * Etiqueta para identificar el propósito del selector de ubicación.
   */
  label: string;

  /**
   * Ubicación seleccionada actualmente.
   */
  value: locationInputInterface;

  /**
   * Función callback que se llama cuando la selección de ubicación cambia.
   * 
   * @param location - Un objeto que contiene las selecciones de nación, región y ciudad.
   */
  onChange: (location: locationInputInterface) => void;
}

/**
 * Componente LocationSelector.
 * 
 * Este componente permite al usuario seleccionar una nación, región y ciudad de origen o destino.
 * Está diseñado para ser reutilizable y adaptable a diferentes contextos en un formulario.
 * 
 * @param {LocationSelectorProps} props - Las propiedades del componente.
 * 
 * @example
 * <LocationSelector
 *   label="Ciudad de origen"
 *   value={{ nation: '', region: '', cityId: '' }}
 *   onLocationChange={(location) => console.log(location)}
 * />
 * 
 * @returns Un componente que permite la selección de nación, región y ciudad.
 */
export default function LocationSelector({ value, label, onChange }: LocationSelectorProps) {

  /**
   * Maneja el cambio de selección en el dropdown de nación.
   * Resetea las selecciones de región y ciudad cuando la nación cambia.
   *
   * @param event - El evento de cambio del elemento select.
   */
  const handleNationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({nation: event.target.value, region:"", cityId:""})
  };

  /**
   * Maneja el cambio de selección en el dropdown de región.
   * Resetea la selección de ciudad cuando la región cambia.
   *
   * @param event - El evento de cambio del elemento select.
   */
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({...value, region: event.target.value, cityId:""})
  };

  /**
   * Maneja el cambio de selección en el dropdown de ciudad.
   *
   * @param event - El evento de cambio del elemento select.
   */
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({...value, cityId: event.target.value})
  };

  /**
   * Filtra las regiones disponibles según la nación seleccionada.
   */
  const filteredRegions = RegionsTable.filter(
    (region: RegionInterface) => region.nation === value.nation
  );

  /**
   * Filtra las ciudades disponibles según la región seleccionada.
   */
  const filteredCities = CitiesTable.filter(
    (city: CityInterface) => city.region === value.region
  );

  return (
    <>
      <label className="block text-sm leading-6 text-gray-900">
        {label}
      </label>

      {/* Selector de Nación */}
      <div className="mt-2">
        <select
          value={value.nation}
          onChange={handleNationChange}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="" disabled>
            Selecciona una nación
          </option>
          {NationsTable.map((nation: NationInterface) => (
            <option key={nation.name} value={nation.name}>
              {nation.nameSpanish}
            </option>
          ))}
        </select>
      </div>

      {/* Selector de Región */}
      {value.nation && (
        <div className="mt-4">
          <select
            value={value.region}
            onChange={handleRegionChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="" disabled>
              Selecciona una región
            </option>
            {filteredRegions.map((region: RegionInterface) => (
              <option key={region.name} value={region.name}>
                {region.nameSpanish}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Selector de Ciudad */}
      {value.region && (
        <div className="mt-4">
          <select
            value={value.cityId}
            onChange={handleCityChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="" disabled>
              Selecciona una ciudad
            </option>
            {filteredCities.map((city: CityInterface) => (
              <option key={city.id} value={city.id.toString()}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}
