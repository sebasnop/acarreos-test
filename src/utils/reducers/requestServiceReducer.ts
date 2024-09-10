import type { locationInputInterface } from '@/interfaces/AppInterfaces';

/**
 * Estructura de datos de la información del formulario
 */
interface formResponseInterface {
  selectedServiceType: string;
  originLocation: locationInputInterface;
  destinationLocation: locationInputInterface;
  originAddress: string;
  destinationAddress: string;
  declaredValue: string;
  documentWeight: string;
  objectWeight: string;
  objectHeight: string;
  objectLength: string;
  objectWidth: string;
  movingSize: string;
  serviceDate: string
}

/**
 * Estado inicial del formulario PriceQuoteForm.
 */
export const initialState: formResponseInterface = {
  selectedServiceType: '',
  originLocation: { nation: '', region: '', cityId: '' },
  destinationLocation: { nation: '', region: '', cityId: '' },
  originAddress: '',
  destinationAddress: '',
  declaredValue: '',
  documentWeight: '',
  objectWeight: '',
  objectHeight: '',
  objectLength: '',
  objectWidth: '',
  movingSize: '',
  serviceDate: ''
};

/**
 * Tipos de acciones de actualización para el priceQuoteReducer.
 */
export enum FormActionKind {
  SET_SERVICE_TYPE = 'SET_SERVICE_TYPE',
  SET_ORIGIN_LOCATION = 'SET_ORIGIN_LOCATION',
  SET_DESTINATION_LOCATION = 'SET_DESTINATION_LOCATION',
  SET_ORIGIN_ADDRESS = 'SET_ORIGIN_ADDRESS',
  SET_DESTINATION_ADDRESS = 'SET_DESTINATION_ADDRESS',
  SET_DECLARED_VALUE = 'SET_DECLARED_VALUE',
  SET_DOCUMENT_WEIGHT = 'SET_DOCUMENT_WEIGHT',
  SET_OBJECT_WEIGHT = 'SET_OBJECT_WEIGHT',
  SET_OBJECT_HEIGHT = 'SET_OBJECT_HEIGHT',
  SET_OBJECT_LENGTH = 'SET_OBJECT_LENGTH',
  SET_OBJECT_WIDTH = 'SET_OBJECT_WIDTH',
  SET_MOVING_SIZE = 'SET_MOVING_SIZE',
  SET_SERVICE_DATE = 'SET_SERVICE_DATE'
}

/**
 *  Interfaz para las acciones del priceQuoteReducer.
 */
interface FormAction {
  type: FormActionKind;
  payload: string | locationInputInterface;
}

/**
 * Reducer para manejar el estado del formulario de cotización.
 * 
 * @param state - Estado actual.
 * @param action - Acción que se despacha para modificar el estado.
 * @returns El nuevo estado.
 */
export function requestServiceReducer(
  state: formResponseInterface,
  {type, payload}: FormAction
) {
  switch (type) {
    case 'SET_SERVICE_TYPE':
      return { ...state, selectedServiceType: payload as string };
    case 'SET_ORIGIN_LOCATION':
      return { ...state, originLocation: payload as locationInputInterface };
    case 'SET_DESTINATION_LOCATION':
      return { ...state, destinationLocation: payload as locationInputInterface };
    case 'SET_DECLARED_VALUE':
      return { ...state, declaredValue: payload as string };
    case 'SET_DOCUMENT_WEIGHT':
      return { ...state, documentWeight: payload as string };
    case 'SET_OBJECT_WEIGHT':
      return { ...state, objectWeight: payload as string };
    case 'SET_OBJECT_HEIGHT':
      return { ...state, objectHeight: payload as string };
    case 'SET_OBJECT_LENGTH':
      return { ...state, objectLength: payload as string };
    case 'SET_OBJECT_WIDTH':
      return { ...state, objectWidth: payload as string };
    case 'SET_MOVING_SIZE':
      return { ...state, movingSize: payload as string };
    case 'SET_SERVICE_DATE':
      return { ...state, serviceDate: payload as string };
    default:
      return state;
  }
}
