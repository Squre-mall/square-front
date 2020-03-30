import axios from "axios";
import { ClothsDataType } from "../Types/ContainerTypes";

export async function getClothsAll(page: number) {
  const clothsAPI = "https://squaremall.pythonanywhere.com/cloth/";

  const response: ClothsDataType = await axios.get(clothsAPI, {
    params: {
      page: page
    }
  });

  return response;
}
