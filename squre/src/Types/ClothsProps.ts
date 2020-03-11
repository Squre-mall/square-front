import { ClothsBrandType, ClothsAllType } from "./ClothsTypes";

export type ClothsBrandProps = {
  cloths: ClothsBrandType[];
};

export type ClothsAllProps = {
  title: string;
  cloths: ClothsAllType[];
  count: number;
};
