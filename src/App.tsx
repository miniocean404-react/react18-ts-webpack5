import { PropsWithChildren } from "react";

import useCustomRouter from "@/router";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, store } from "./store";

function App({ children }: PropsWithChildren<any>) {
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      {(_isLoading) => useCustomRouter()}
    </PersistGate>
  </Provider>;
}

export default App;
