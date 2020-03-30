import { combineReducers } from "redux";
import cloths from "./reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  cloths
});

export default rootReducer;
