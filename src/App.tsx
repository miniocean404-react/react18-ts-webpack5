import { PropsWithChildren, ReactNode, useEffect } from "react"
import { Outlet, ScrollRestoration, redirect, useNavigation } from "react-router-dom"
import Layout from "./layout/default"

export default function App({ children }: PropsWithChildren<any>): ReactNode {
  return (
    <>
      <Layout></Layout>
    </>
  )
}
