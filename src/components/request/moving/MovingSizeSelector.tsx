import { movingSizes } from "@/constants/movingSizes";

interface MovingSizeSelectorProps {

  /**
   * Tamaño de mudanza seleccionado.
   */
  value: string; 

  /**
   * Función callback que se llama cuando el tamaño de la mudanza cambia.
   * 
   * @param movingSize - El tamaño de la mudanza seleccionado.
   */
  onChange: (movingSize: string) => void;
}

/**
 * Componente `MovingSizeSelector`.
 * 
 * Renderiza un campo de selección (dropdown) que permite al usuario seleccionar el tamaño de la mudanza.
 * Los tamaños disponibles se basan en las opciones definidas en las constantes del negocio.
 * 
 * @param {MovingSizeSelectorProps} props - Las propiedades del componente.
 * @returns Un selector desplegable para elegir el tamaño de la mudanza.
 */
export default function MovingSizeSelector({
  value,
  onChange
}: MovingSizeSelectorProps) {

  const labelTitle: string = "Tamaño de la mudanza";

  /**
   * Maneja los cambios en el selector de tamaño de la mudanza y actualiza el estado local.
   * 
   * @param event - El evento de cambio en el campo select.
   */
  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor="moving-size" className="block text-lg font-semibold leading-6 text-gray-900">
        {labelTitle}
      </label>

      <div className="mt-2">
        <select
          value={value}
          id="moving-size"
          name="moving-size"
          onChange={handleSizeChange}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="" disabled>
            Selecciona un tamaño de mudanza
          </option>
          {movingSizes.map((size) => (
            <option key={size.label} value={size.value}>
              {size.labelEs}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
