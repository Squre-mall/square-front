import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import {
  ClothsDataType_detail,
  DetailResponseType
} from "../../../Types/ContainerTypes";

export type ClothsDetailAction = ActionType<typeof actions>;

export type ClothsDetailState = {
  detail: {
    loading: boolean;
    error: Error | null;
    cloths: ClothsDataType_detail | null;
    detail: DetailResponseType | null;
  };
};
