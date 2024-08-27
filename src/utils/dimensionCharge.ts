import {
  cargoDimensionMedia,
  cargoDimensionGrande
} from '@/constants/bussinessConsts';

export default function dimensionCharge(measure: number): number {

  let charge: number = 0;

  if (measure > 99 && measure < 300) {
    charge = cargoDimensionMedia;
  } else if (measure > 299) {
    charge = cargoDimensionGrande;
  }

  return charge;
}