import { IPeople, ISpecie, IStarship } from "swapi-ts";

export interface IPageDataResponse {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface IPeopleResponse extends IPageDataResponse {
  results: IPeople[];
}

export interface ISpeciesResponse extends IPageDataResponse {
  results: ISpecie[];
}

export interface IStarShipResponse extends IPageDataResponse {
  results: IStarship[];
}
