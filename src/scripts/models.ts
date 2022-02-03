export enum ServiceTypes {
  PCBuilding,
  KeyboardBuilding,
  SoftwareDevelopment,
}

export interface Service {
  title: string;
  description: string;
  ratePrHourDKK: number;
}
