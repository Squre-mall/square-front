import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { ClothsDataType } from "../../../Types/ContainerTypes";

export type ClothsAllAction = ActionType<typeof actions>;

export type ClothsAllState = {
  cloths: {
    loading: boolean;
    error: Error | null;
    data: ClothsDataType | null;
  };
};
