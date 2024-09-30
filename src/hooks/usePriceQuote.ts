import { useState } from 'react';
import {
  DocumentPriceQuote,
  MovingPriceQuote,
  ObjectPriceQuote
} from '@/interfaces/AppInterfaces';
import getDocumentQuote from '@/utils/getDocumentQuote';
import getObjectQuote from '@/utils/getObjectQuote';
import getMovingQuote from '@/utils/getMovingQuote';

/**
 * Tipo que define el resultado de la cotización del precio.
 * Puede ser un número o `null` si no se ha calculado.
 */
type PriceQuoteResult = number | null;

/**
 * Interfaz que define los datos necesarios para calcular la cotización de un servicio.
 */
interface PriceQuoteData {
  serviceType: string;
  originLocation: { cityId: string };
  destinationLocation: { cityId: string };
  declaredValue: string;
  documentWeight?: string;
  objectWeight?: string;
  objectHeight?: string;
  objectLength?: string;
  objectWidth?: string;
  movingSize?: string;
}

/**
 * Hook personalizado que proporciona la funcionalidad para calcular la cotización de precios
 * para diferentes tipos de servicios (documento, objeto, mudanza).
 * 
 * @returns Un objeto que contiene la cotización del precio (`priceQuote`) y una función
 * para calcular la cotización (`calculateQuote`).
 */
export function usePriceQuote() {
  const [priceQuote, setPriceQuote] = useState<PriceQuoteResult>(null);

  /**
   * Función para calcular la cotización de un servicio basado en el tipo de servicio y los datos proporcionados.
   * 
   * @param {PriceQuoteData} data - Los datos necesarios para calcular la cotización del servicio.
   */
  const calculateQuote = async (data: PriceQuoteData) => {
    const {
      serviceType,
      originLocation,
      destinationLocation,
      declaredValue,
      documentWeight,
      objectWeight,
      objectHeight,
      objectLength,
      objectWidth,
      movingSize,
    } = data;

    let result: number | null = null;

    if (serviceType === 'documento' && documentWeight) {
      
      const queryDocument: DocumentPriceQuote = {
        originCityId: Number(originLocation.cityId),
        destinationCityId: Number(destinationLocation.cityId),
        declaredValue: Number(declaredValue),
        weight: Number(documentWeight),
      };
      
      result = getDocumentQuote(queryDocument);
    
    } else if (serviceType === 'objeto' && objectWeight && objectHeight && objectLength && objectWidth) {
      
      const queryObject: ObjectPriceQuote = {
        originCityId: Number(originLocation.cityId),
        destinationCityId: Number(destinationLocation.cityId),
        declaredValue: Number(declaredValue),
        weight: Number(objectWeight),
        height: Number(objectHeight),
        length: Number(objectLength),
        width: Number(objectWidth),
      };
      
      result = getObjectQuote(queryObject);
    
    } else if (serviceType === 'mudanza' && movingSize) {
      
      const queryMoving: MovingPriceQuote = {
        originCityId: Number(originLocation.cityId),
        destinationCityId: Number(destinationLocation.cityId),
        declaredValue: Number(declaredValue),
        size: Number(movingSize),
      };
      
      result = getMovingQuote(queryMoving);
    
    }

    setPriceQuote(result);
  };

  return { priceQuote, calculateQuote };
}

