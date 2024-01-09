import { combineReducers } from "redux";
import userInfoSlice from "@/store/feature/user-info";
import payInfoSlice from "@/store/feature/pay-info";
import loginInfoSlice from "@/store/feature/login";

// 合并 reducer
export const reducers = combineReducers({
  userInfo: userInfoSlice,
  payInfo: payInfoSlice,
  loginInfo: loginInfoSlice,
});
