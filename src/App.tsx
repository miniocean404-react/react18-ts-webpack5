import { PropsWithChildren, ReactNode } from "react"

import { RouterProvider } from "react-router-dom"
import router from "@/router"

function App({ children }: PropsWithChildren<any>): ReactNode {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
