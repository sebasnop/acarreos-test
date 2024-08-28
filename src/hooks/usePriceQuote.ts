import { useState } from 'react';
import {
  DocumentPriceQuote,
  MovingPriceQuote,
  ObjectPriceQuote
} from '@/interfaces/AppInterfaces';
import getDocumentQuote from '@/utils/getDocumentQuote';
import getObjectQuote from '@/utils/getObjectQuote';
import getMovingQuote from '@/utils/getMovingQuote';

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
