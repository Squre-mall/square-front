import { ThunkAction } from "redux-thunk";
import { RootState } from "./index";
import { ClothsAllAction } from "./types";
import { getClothsAll } from "../../api/squareAll";
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
