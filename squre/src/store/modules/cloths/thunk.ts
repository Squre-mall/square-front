import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { ClothsAllAction } from "./types";
import {
  getClothsAll,
  getClothsCategory,
  getClothsBrand
} from "../../../api/square";
import { getClothsAllAsync } from "./actions";

export function getClothsAllThunk(
  page: number
): ThunkAction<void, RootState, null, ClothsAllAction> {
  return async dispatch => {
    const { request, success, failure } = getClothsAllAsync;

    dispatch(request());
    try {
      const clothsAll = await getClothsAll(page);
      dispatch(success(clothsAll));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getClothsCategoryThunk(
  page: number,
  category: string
): ThunkAction<void, RootState, null, ClothsAllAction> {
  return async dispatch => {
    const { request, success, failure } = getClothsAllAsync;

    dispatch(request());
    try {
      const clothsCategory = await getClothsCategory(page, category);
      dispatch(success(clothsCategory));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getClothsBrandThunk(
  page: number,
  brand: string
): ThunkAction<void, RootState, null, ClothsAllAction> {
  return async dispatch => {
    const { request, success, failure } = getClothsAllAsync;

    dispatch(request());
    try {
      const clothsBrand = await getClothsBrand(page, brand);
      dispatch(success(clothsBrand));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
