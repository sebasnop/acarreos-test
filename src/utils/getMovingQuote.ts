import { MovingPriceQuote } from '@/interfaces/AppInterfaces';
import calculateDistance from '@/utils/calculateDistance';
import {
  tarifaPorDistancia,
  tarifaPorBisonteSize,
  tarifaPorValorDeclarado,
} from '@/constants/bussinessConsts';


export default function getMovingQuote(
  { originCityId,
    destinationCityId,
    declaredValue,
    size
  }: MovingPriceQuote): number {
  
  const distancia: number = calculateDistance(originCityId, destinationCityId);

  const tarifa: number =
    (distancia * tarifaPorDistancia) +
    (size * tarifaPorBisonteSize) +
    (declaredValue * tarifaPorValorDeclarado)

  return tarifa;
}