import axios from "axios";
import {
  ClothsDataType,
  ClothsDataType_detail,
  DetailResponseType
} from "../Types/ContainerTypes";

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

export async function getCltoahDetail_cloths(id: string) {
  const response: ClothsDataType_detail = await axios.get(clothsAPI, {
    params: {
      id: id
    }
  });

  return response;
}

export async function getClothsDetail_detail(id: string) {
  const response: DetailResponseType = await axios.get(
    `https://squaremall.pythonanywhere.com/cloth/detail/${id}`
  );

  return response;
}
