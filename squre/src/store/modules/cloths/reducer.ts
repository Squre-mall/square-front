import { createReducer } from "typesafe-actions";
import { ClothsAllAction, ClothsAllState } from "./types";
import {
  GET_CLOTHS_ALL,
  GET_CLOTHS_ALL_SUCCESS,
  GET_CLOTHS_ALL_ERROR
} from "./actions";

const initalState: ClothsAllState = {
  cloths: {
    loading: false,
    error: null,
    data: null
  }
};

const cloths = createReducer<ClothsAllState, ClothsAllAction>(initalState, {
  [GET_CLOTHS_ALL]: state => ({
    ...state,
    cloths: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_CLOTHS_ALL_SUCCESS]: (state, action) => ({
    ...state,
    cloths: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_CLOTHS_ALL_ERROR]: (state, action) => ({
    ...state,
    cloths: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default cloths;
