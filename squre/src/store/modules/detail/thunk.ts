import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { ClothsDetailAction } from "./types";
import {
  getClothsDetail_detail,
  getCltoahDetail_cloths
} from "../../../api/square";
import { getClothsDetailAsync } from "./actions";

export function getClothsDetailThunk(
  id: number
): ThunkAction<void, RootState, null, ClothsDetailAction> {
  return async dispatch => {
    const { request, success, failure } = getClothsDetailAsync;
    dispatch(request());
    try {
      const clothsDetail_cloths = await getCltoahDetail_cloths(id);
      const clothsDetail_detail = await getClothsDetail_detail(id);
      const detail = {
        cloths: clothsDetail_cloths,
        detail: clothsDetail_detail
      };
      dispatch(success(detail));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
