import React, { useState, useEffect } from 'react';
import { NationsTable } from '@/database/NationsTable';
import { RegionsTable } from '@/database/RegionsTable';
import { CitiesTable } from '@/database/CitiesTable';
import type { NationInterface, RegionInterface, CityInterface } from '@/interfaces/DatabaseInterfaces';

/**
 * Props para el componente LocationSelector.
 */
interface LocationSelectorProps {
  /**
   * Etiqueta para identificar el propósito del selector.
   */
  label: string;

  /**
   * Función callback que se llama cuando la selección de ubicación cambia.
   * 
   * @param location - Un objeto que contiene las selecciones de nación, región y ciudad.
   */
  onLocationChange: (location: { nation: string; region: string; cityId: string }) => void;
}

/**
 * Componente LocationSelector.
 * 
 * Este componente permite al usuario seleccionar una nación, región y ciudad de origen o destino.
 * Está diseñado para ser reutilizable y adaptable a diferentes contextos en un formulario.
 * 
 * @param {string} label - La etiqueta que describe el propósito del selector.
 * @param {Function} onLocationChange - Callback para manejar los cambios en la selección de la ubicación.
 * 
 * @example
 * <LocationSelector
 *   label="Ciudad de origen"
 *   onLocationChange={(location) => console.log(location)}
 * />
 * 
 * @returns {JSX.Element} Un componente que permite la selección de nación, región y ciudad.
 */
export default function LocationSelector({ label, onLocationChange }: LocationSelectorProps): JSX.Element {
  // Estados para almacenar las selecciones del usuario
  const [selectedNation, setSelectedNation] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCityId, setSelectedCityId] = useState<string>('');

  /**
   * Efecto que se ejecuta cuando cambia la selección de nación, región o ciudad.
   * Llama al callback `onLocationChange` para notificar al componente padre sobre la selección actual.
   */
  useEffect(() => {
    onLocationChange({ nation: selectedNation, region: selectedRegion, cityId: selectedCityId });
  }, [selectedNation, selectedRegion, selectedCityId]);

  /**
   * Maneja el cambio de selección en el dropdown de nación.
   * Resetea las selecciones de región y ciudad cuando la nación cambia.
   *
   * @param event - El evento de cambio del elemento select.
   */
  const handleNationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNation(event.target.value);
    setSelectedRegion(''); // Resetea la región y ciudad cuando cambia la nación
    setSelectedCityId('');
  };

  /**
   * Maneja el cambio de selección en el dropdown de región.
   * Resetea la selección de ciudad cuando la región cambia.
   *
   * @param event - El evento de cambio del elemento select.
   */
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
    setSelectedCityId(''); // Resetea la ciudad cuando cambia la región
  };

  /**
   * Maneja el cambio de selección en el dropdown de ciudad.
   *
   * @param event - El evento de cambio del elemento select.
   */
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCityId(event.target.value);
  };

  /**
   * Filtra las regiones disponibles según la nación seleccionada.
   */
  const filteredRegions = RegionsTable.filter(
    (region: RegionInterface) => region.nation === selectedNation
  );

  /**
   * Filtra las ciudades disponibles según la región seleccionada.
   */
  const filteredCities = CitiesTable.filter(
    (city: CityInterface) => city.region === selectedRegion
  );

  return (
    <>
      <label className="block text-sm leading-6 text-gray-900">
        {label}
      </label>

      {/* Selector de Nación */}
      <div className="mt-2">
        <select
          value={selectedNation}
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
      {selectedNation && (
        <div className="mt-4">
          <select
            value={selectedRegion}
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
      {selectedRegion && (
        <div className="mt-4">
          <select
            value={selectedCityId}
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
