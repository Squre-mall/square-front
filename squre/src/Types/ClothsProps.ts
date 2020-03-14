import { ClothsBrandType, ClothsAllType } from "./ClothsTypes";

export type ClothsBrandProps = {
  cloths: ClothsBrandType[];
  count: number;
};

export type ClothsAllProps = {
  title: string;
  cloths: ClothsAllType[];
  count: number;
};
