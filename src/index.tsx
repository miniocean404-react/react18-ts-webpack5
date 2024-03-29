import { createRoot } from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { Suspense } from "react"

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persist, store } from "./store"

import { AliveScope } from "react-activation"
import { RouterProvider } from "react-router-dom"
import router from "@/router"

import "./css/base/base.scss"

const root = document.getElementById("root")!

createRoot(root).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      {/* <AliveScope> */}
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
      {/* </AliveScope> */}
    </PersistGate>
  </Provider>,
)

reportWebVitals(null)
