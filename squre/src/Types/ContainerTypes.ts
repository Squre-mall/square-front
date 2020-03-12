import { ClothsPriceType } from "./ClothsPriceType";

type ClothsType = {
  id: number;
  cloth_detail_musinsa: number;
  productNo: string;
  brand: string;
  title: string;
  clothImgSuffix: string;
  price: ClothsPriceType;
  category: string;
  created: string;
  modified: string;
};

type ClothsResponseType = {
  count: number;
  next: string;
  previous: string;
  results: never;
};

type ClothsResponseType_detail = {
  count: number;
  next: string;
  previous: string;
  results: ClothsType;
};

export type ClothsDataType = {
  data: ClothsResponseType;
};

export type ClothsDataType_detail = {
  data: ClothsResponseType_detail;
};

export type DetailType = {
  cloth: number;
  description: string;
  season: string;
  gender: string;
  monthlyPopularity: string;
  detailImageUrlList: string;
  color: string;
  importation: string;
  manufacturingYM: string;
  material: string;
  sizeNweight: string;
  manufacturer: string;
  manufactured: string;
  asdirector: string;
  precautions: string;
  warrantyBasis: string;
};

export type DetailResponseType = {
  data: DetailType;
};
