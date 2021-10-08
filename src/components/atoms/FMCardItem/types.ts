export default interface IFMCardItem {
  name: string;
  skills?: Array<Object>;
  avatar: string;
  job: string;
  identifier: Number;
}

export interface ILoader {
  src: string;
  width: number;
  quality: number;
}
