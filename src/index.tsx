import { createRoot } from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persist, store } from "./store"

import "./css/base/base.scss"

const root = document.getElementById("root")!

createRoot(root).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
)

reportWebVitals(null)
