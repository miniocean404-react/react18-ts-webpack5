import { createRoot } from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persist, store } from "./store"

import { RouterProvider } from "react-router-dom"
import router from "@/router"

import "./css/base/base.scss"

const root = document.getElementById("root")!

createRoot(root).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
)

reportWebVitals(null)
