import { combineReducers } from "redux";
import cloths from "./cloths/reducer";
import detail from "./detail/reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  cloths,
  detail
});

export default rootReducer;
