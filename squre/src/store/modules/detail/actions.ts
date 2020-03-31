import { createAsyncAction } from "typesafe-actions";
import { DetailThunkType } from "../../../Types/ContainerTypes";
import { AxiosError } from "axios";

export const GET_CLOTHS_DETAIL = "cloths/GET_CLOTHS_DETAIL";
export const GET_CLOTHS_DETAIL_SUCCESS = "cloths/GET_CLOTHS_DETAIL_SUCCESS";
export const GET_CLOTHS_DETAIL_ERROR = "cloths/GET_CLOTHS_DETAIL_ERROR";

export const getClothsDetailAsync = createAsyncAction(
  GET_CLOTHS_DETAIL,
  GET_CLOTHS_DETAIL_SUCCESS,
  GET_CLOTHS_DETAIL_ERROR
)<undefined, DetailThunkType, AxiosError>();
