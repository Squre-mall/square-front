import { ClothsType } from "../../Types/ContainerTypes";

export const LOADING = "cloths/LOADING";
export const SUCCESS = "cloths/SUCCESS";
export const ERROR = "cloths/ERROR";

export type initStateType = {
  loading: boolean;
  cloths: ClothsType[];
  error: string;
  next: string;
  prev: string;
  count: number;
};

const initState: initStateType = {
  loading: false,
  cloths: [],
  error: "",
  next: "",
  prev: "",
  count: 0
};

const cloths = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
        cloths: null,
        error: null,
        next: null,
        prev: null,
        count: 0
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        cloths: action.payload.data,
        error: null,
        next: action.payload.next,
        prev: action.payload.prev,
        count: action.payload.count
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        cloths: null,
        error: action.payload.error,
        next: null,
        prev: null,
        count: 0
      };
    default:
      return {
        state
      };
  }
};

export default cloths;
