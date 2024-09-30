import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import LocationSelector from '@/components/request/common/LocationSelector';
import ServiceTypeSelector from '@/components/request/common/ServiceTypeSelector';
import DeclaredValueInput from '@/components/request/common/DeclaredValueInput';
import AddressInput from '@/components/request/common/AddressInput';
import ServiceDateInput from '@/components/request/common/ServiceDateInput';
import DocumentWeightInput from '@/components/request/document/DocumentWeightInput';
import ObjectWeightInput from '@/components/request/object/ObjectWeightInput';
import ObjectHeightInput from '@/components/request/object/ObjectHeightInput';
import ObjectLengthInput from '@/components/request/object/ObjectLengthInput';
import ObjectWidthInput from '@/components/request/object/ObjectWidthInput';
import MovingSizeSelector from '@/components/request/moving/MovingSizeSelector';

import {
  FormActionKind,
  initialState as initialFormState,
  requestServiceReducer
} from '@/utils/reducers/requestServiceReducer'
import generateOrderCode from '@/utils/generateOrderCode';

/**
 * Componente `RequestServiceForm`.
 *
 * Renderiza un formulario para que los usuarios puedan solicitar un servicio de transporte,
 * incluyendo la selección de tipo de servicio, ubicación, dirección, y detalles específicos
 * como el peso del documento, dimensiones del objeto, o el tamaño de la mudanza.
 *
 * @returns El formulario para solicitar un servicio de transporte.
 */
export default function RequestServiceForm() {
  const [state, dispatch] = useReducer(requestServiceReducer, initialFormState);

  /**
   * Maneja el envío del formulario, recopilando todos los datos ingresados y mostrándolos en la consola.
   *
   * @param event - El evento de envío del formulario.
   */
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const orderCode: string = generateOrderCode();

    // Mostrar el alert con el código de pedido
    alert(`Su pedido ha sido creado con el código ${orderCode}`);

    // Navegar a la página main-user
    navigate('/main-user');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 mb-20 space-y-10">

          {/* Tipo de servicio - Radio button selection */}
          <ServiceTypeSelector
            value={state.selectedServiceType}
            onChange={
              (serviceType) =>
                dispatch({ type: FormActionKind.SET_SERVICE_TYPE, payload: serviceType })
            }
          />

          {/* Sección de ubicaciones */}
          <section className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8">
            {/* Ubicación de origen */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de origen</h2>
              <LocationSelector
                label="Ciudad de origen"
                value={state.originLocation}
                onChange={
                  (originLocation) =>
                    dispatch({ type: FormActionKind.SET_ORIGIN_LOCATION, payload: originLocation })
                }
              />

              {state.originLocation.cityId &&
                <div className='mt-8'>
                  <AddressInput
                    labelTitle='Dirección de origen'
                    id='origin-address'
                    value={state.originAddress}
                    onChange={
                      (originAddress) =>
                        dispatch({ type: FormActionKind.SET_ORIGIN_ADDRESS, payload: originAddress })
                    } />
                </div>
              }

            </div>

            {/* Ubicación de destino */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">Ubicación de destino</h2>
              <LocationSelector
                label="Ciudad de destino"
                value={state.destinationLocation}
                onChange={
                  (destinationLocation) =>
                    dispatch({ type: FormActionKind.SET_DESTINATION_LOCATION, payload: destinationLocation })
                }
              />

              {state.destinationLocation.cityId &&
                <div className='mt-8'>
                  <AddressInput
                    labelTitle='Dirección de destino'
                    id='destination-address'
                    value={state.destinationAddress}
                    onChange={
                      (destinationAddress) =>
                        dispatch({ type: FormActionKind.SET_DESTINATION_ADDRESS, payload: destinationAddress })
                    }
                  />
                </div>
              }

            </div>
          </section>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <section className="sm:col-span-3">
              <DeclaredValueInput
                value={state.declaredValue}
                onChange={
                  (declaredValue) => dispatch({ type: FormActionKind.SET_DECLARED_VALUE, payload: declaredValue })
                }
              />
            </section>

            {/* Campo adicional para servicio tipo "documento" */}
            {state.selectedServiceType === 'documento' && (
              <section className="sm:col-span-3">
                <DocumentWeightInput
                  value={state.documentWeight}
                  onChange={
                    (documentWeight) =>
                      dispatch({ type: FormActionKind.SET_DOCUMENT_WEIGHT, payload: documentWeight })
                  }
                />
              </section>
            )}

            {/* Campo adicional para servicio tipo "objeto" */}
            {state.selectedServiceType === 'objeto' && (
              <section className="sm:col-span-3">
                <ObjectWeightInput value={state.objectWeight}
                  onChange={
                    (objectWeight) =>
                      dispatch({ type: FormActionKind.SET_OBJECT_WEIGHT, payload: objectWeight })
                  }
                />
              </section>
            )}

          </div>

          {/* Sección adicional para servicio tipo "objeto" */}
          {state.selectedServiceType === 'objeto' && (
            <section className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-2">
                <ObjectHeightInput value={state.objectHeight} onChange={
                  (objectHeight) =>
                    dispatch({ type: FormActionKind.SET_OBJECT_HEIGHT, payload: objectHeight })
                } />
              </div>

              <div className="sm:col-span-2">
                <ObjectLengthInput value={state.objectLength} onChange={
                  (objectLength) =>
                    dispatch({ type: FormActionKind.SET_OBJECT_LENGTH, payload: objectLength })
                } />
              </div>

              <div className="sm:col-span-2">
                <ObjectWidthInput value={state.objectWidth} onChange={
                  (objectWidth) =>
                    dispatch({ type: FormActionKind.SET_OBJECT_WIDTH, payload: objectWidth })
                } />
              </div>
            </section>
          )}

          {/* Campo adicional para servicio tipo "mudanza" */}
          {state.selectedServiceType === 'mudanza' && (
            <section>
              <MovingSizeSelector value={state.movingSize} onChange={
                (movingSize) =>
                  dispatch({ type: FormActionKind.SET_MOVING_SIZE, payload: movingSize })
              } />
            </section>
          )}

          <section>
            <ServiceDateInput
              value={state.serviceDate}
              onChange={ (serviceDate) => dispatch({ type: FormActionKind.SET_SERVICE_DATE, payload: serviceDate })} />
          </section>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <label htmlFor="submit" className="sr-only">
              Solicitar servicio
            </label>
            <button
              type="submit"
              className="rounded-md bg-yellow-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-900"
            >
              Solicitar servicio
            </button>
          </div>

        </div>

      </form>
    </>
  );
}

