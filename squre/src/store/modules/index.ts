import { combineReducers } from "redux";
import cloths from "./cloths/reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  cloths
});

export default rootReducer;
