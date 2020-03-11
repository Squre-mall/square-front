import { ClothsPriceType } from "./ClothsPriceType";

// brand type
export type ClothsBrandType = {
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

// detail type
export type ClothsDetailType = {
  id: number;
  cloth_detail_musinsa: number;
  productNo: string;
  brand: string;
  title: string;
  clothImgSuffix: string;
  original_price: string;
  discounted_price: string;
  category: string;
  gender: string;
  season: string;
  manufactured: string;
  color: string;
  description: string;
};

// item type
export type ClothsItemType = {
  id: number;
  cloth_detail_musinsa: number;
  productNo: string;
  brand: string;
  title: string;
  clothImgSuffix: string;
  original_price: string;
  discounted_price: string;
  category: string;
};

// full list type
export type ClothsAllType = {
  id: number;
  cloth_detail_musinsa: number;
  productNo: string;
  brand: string;
  title: string;
  clothImgSuffix: string;
  price: ClothsPriceType;
  category: string;
};
