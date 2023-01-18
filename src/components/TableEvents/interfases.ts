export interface tableStruct {
  id: number;
  transport: string;
  date: string;
  card: number;
  gasStation: string;
  adress: string;
  longitude: string;
  latitude: string;
  typeOfFuel: string;
  tank: number;
  cost: number;
}
/* export interface resp {
  data: tableStruct[] | [];
  status: 200 | 201 | 204 | 404 | 500;
} */
export interface responseStruct {
  data: Array<tableStruct> | [];
  empty: boolean;
  error: boolean;
}
export type categoryType =
  | 'transport'
  | 'date'
  | 'card'
  | 'gasStation'
  | 'adress'
  | 'typeOfFuel'
  | 'tank'
  | 'cost';
