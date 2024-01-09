import { PropsWithChildren } from "react";

import useCustomRouter from "@/router";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, store } from "./store";

function App({ children }: PropsWithChildren<any>) {
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      {/* 解决taro小程序 onLoad加载时候获取不到页面实例的情况 */}
      {/*eslint-disable-next-line*/}
      {(_isLoading) => useCustomRouter()}
    </PersistGate>
  </Provider>;
}

export default App;
