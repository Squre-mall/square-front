import { createReducer } from "typesafe-actions";
import { ClothsDetailState, ClothsDetailAction } from "./types";
import {
  GET_CLOTHS_DETAIL,
  GET_CLOTHS_DETAIL_SUCCESS,
  GET_CLOTHS_DETAIL_ERROR
} from "./actions";

const initalState: ClothsDetailState = {
  detail: {
    loading: false,
    error: null,
    cloths: null,
    detail: null
  }
};

const detail = createReducer<ClothsDetailState, ClothsDetailAction>(
  initalState,
  {
    [GET_CLOTHS_DETAIL]: state => ({
      ...state,
      detail: {
        loading: true,
        error: null,
        cloths: null,
        detail: null
      }
    }),
    [GET_CLOTHS_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      detail: {
        loading: false,
        error: null,
        cloths: action.payload.cloths,
        detail: action.payload.detail
      }
    }),
    [GET_CLOTHS_DETAIL_ERROR]: (state, action) => ({
      ...state,
      detail: {
        loading: false,
        error: action.payload,
        cloths: null,
        detail: null
      }
    })
  }
);

export default detail;
