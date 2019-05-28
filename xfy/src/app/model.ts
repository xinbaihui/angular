export enum GENDER {
  MALE = 'male',
  FEMALE = 'female'
}

export class character {
  id: number;
  name: string;
  gender: GENDER;
  character: string
}

export class chatContent {
  content: string;
  sourceName: string;
  sourceId: number;
  time: string | number
}