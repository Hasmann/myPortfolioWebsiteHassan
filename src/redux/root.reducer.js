import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projectDataReducer from "./projectData/projectdata.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["hidden"],
};
const rootReducer = combineReducers({
  portfolio: projectDataReducer,
});

export default persistReducer(persistConfig, rootReducer);

//redux settings
// export default combineReducers({
//   user: UserReducer,
//   hidden: cartToggleReducer,
// });
