import axios from "axios";
import { ClothsDataType } from "../Types/ContainerTypes";

const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/";

export async function getClothsAll(page: number) {
  const response: ClothsDataType = await axios.get(clothsAPI, {
    params: {
      page: page
    }
  });

  return response;
}

export async function getClothsCategory(page: number, category: string) {
  const response: ClothsDataType = await axios.get(clothsAPI, {
    params: {
      category: category,
      page: page
    }
  });

  return response;
}

export async function getClothsBrand(page: number, brand: string) {
  const response: ClothsDataType = await axios.get(clothsAPI, {
    params: {
      brand: brand,
      page: page
    }
  });

  return response;
}
