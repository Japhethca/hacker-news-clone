export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_SINGLE_ITEM = 'GET_SINGLE_ITEM';
export const ISLOADING = 'ISLOADING';
export const PAGINATION = 'PAGINATION';
export const NETWORK_STATUS = 'NETWORK_STATUS';
export const FETCH_USER_DETAIL = 'FETCH_USER_DETAIL';

export type ItemType = {
  id: number,
  deleted?: boolean,
  type?: "job"|"story"|"comment"|"poll"|"pollopt",
  by?: string,
  time?: any,
  text?: string,
  dead?: boolean,
  parent?: number,
  poll?: any,
  kids?: number[],
  url?: string,
  score?: number,
  title?: string,
  parts?: any[],
  descendants?: number
};

export type UserType = {
  about: string,
  created: any,
  delay: number,
  id: string,
  karma: number,
  submitted: number[]
}
