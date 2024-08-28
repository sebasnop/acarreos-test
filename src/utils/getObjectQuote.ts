import { ObjectPriceQuote } from '@/interfaces/AppInterfaces';
import calculateDistance from '@/utils/calculateDistance';
import dimensionCharge from '@/utils/dimensionCharge';
import {
  tarifaPorDistancia,
  tarifaPorPeso,
  tarifaPorValorDeclarado,
} from '@/constants/bussinessConsts';


export default function getObjectQuote(
  { originCityId,
    destinationCityId,
    declaredValue,
    weight,
    height,
    length,
    width
  }: ObjectPriceQuote): number {
  
  const distancia: number = calculateDistance(originCityId, destinationCityId);
  const cargoPorDimensiones = dimensionCharge(height) + dimensionCharge(length) + dimensionCharge(width)

  const tarifa: number =
    (distancia * tarifaPorDistancia) +
    (weight * tarifaPorPeso) +
    (declaredValue * tarifaPorValorDeclarado) +
    cargoPorDimensiones

  return tarifa;
}