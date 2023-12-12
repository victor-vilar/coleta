export const  MeasurementUnit = {
  METRO_CUBICO : 'METRO CÚBICO',
  QUILOS       : 'QUILOS',
  LITROS       : 'LITROS',
  EQUIPAMENTO  : 'EQUIPAMENTO'
}

export type MeasurementUnitType = typeof MeasurementUnit[keyof typeof MeasurementUnit]


export function getMeasurementUnitValues(){
  return Object.keys(MeasurementUnit).filter(value => value);
}
