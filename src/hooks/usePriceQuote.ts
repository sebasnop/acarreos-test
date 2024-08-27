import { useState } from 'react';
import {
  DocumentPriceQuote,
  MovingPriceQuote,
  ObjectPriceQuote
} from '@/interfaces/AppInterfaces';

type PriceQuoteResult = number | null;

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

export function usePriceQuote() {
  const [priceQuote, setPriceQuote] = useState<PriceQuoteResult>(null);

  const getQuoteForDocument = async (query: DocumentPriceQuote): Promise<number> => {
    // Aquí iría la lógica para cotizar un documento
    return 100; // Placeholder
  };

  const getQuoteForObject = async (query: ObjectPriceQuote): Promise<number> => {
    // Aquí iría la lógica para cotizar un objeto
    return 200; // Placeholder
  };

  const getQuoteForMoving = async (query: MovingPriceQuote): Promise<number> => {
    // Aquí iría la lógica para cotizar una mudanza
    return 300; // Placeholder
  };

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
      
      result = await getQuoteForDocument(queryDocument);
    
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
      
      result = await getQuoteForObject(queryObject);
    
    } else if (serviceType === 'mudanza' && movingSize) {
      
      const queryMoving: MovingPriceQuote = {
        originCityId: Number(originLocation.cityId),
        destinationCityId: Number(destinationLocation.cityId),
        declaredValue: Number(declaredValue),
        size: movingSize,
      };
      
      result = await getQuoteForMoving(queryMoving);
    
    }

    setPriceQuote(result);
  };

  return { priceQuote, calculateQuote };
}
