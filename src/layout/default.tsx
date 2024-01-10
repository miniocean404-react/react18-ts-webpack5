import { PropsWithChildren, ReactNode } from "react"
import { Outlet } from "react-router-dom"

function Default({ children }: PropsWithChildren<any>): ReactNode {
  return children
}

export default Default
