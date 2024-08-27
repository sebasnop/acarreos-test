import { DocumentPriceQuote } from '@/interfaces/AppInterfaces';
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
  
  const distancia: number = (originCityId - destinationCityId);

  const tarifa: number =
    (distancia * tarifaPorDistancia) +
    (weight * tarifaPorPeso) +
    (declaredValue * tarifaPorValorDeclarado)

  return tarifa;
}