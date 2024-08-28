import { DocumentPriceQuote } from '@/interfaces/AppInterfaces';
import calculateDistance from '@/utils/calculateDistance';
import {
  tarifaPorDistancia,
  tarifaPorPeso,
  tarifaPorValorDeclarado,
} from '@/constants/bussinessConsts';


export default function getDocumentQuote(
  { originCityId,
    destinationCityId,
    declaredValue,
    weight
  }: DocumentPriceQuote): number {
  
  const distancia: number = calculateDistance(originCityId, destinationCityId);

  const tarifa: number =
    (distancia * tarifaPorDistancia) +
    (weight * tarifaPorPeso) +
    (declaredValue * tarifaPorValorDeclarado)

  return tarifa;
}