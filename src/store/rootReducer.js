import { combineReducers } from "redux";

import modal from "./modal/reducer";
import user from "./user/reducer";

export default combineReducers({
  modal,
  user,
});
