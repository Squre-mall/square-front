import { createAsyncAction } from "typesafe-actions";
import { ClothsDataType } from "../../../Types/ContainerTypes";
import { AxiosError } from "axios";

export const GET_CLOTHS_ALL = "cloths/GET_CLOTHS_ALL";
export const GET_CLOTHS_ALL_SUCCESS = "cloths/GET_CLOTHS_ALL_SUCCESS";
export const GET_CLOTHS_ALL_ERROR = "cloths/GET_CLOTHS_ALL_ERROR";

export const getClothsAllAsync = createAsyncAction(
  GET_CLOTHS_ALL,
  GET_CLOTHS_ALL_SUCCESS,
  GET_CLOTHS_ALL_ERROR
)<undefined, ClothsDataType, AxiosError>();
