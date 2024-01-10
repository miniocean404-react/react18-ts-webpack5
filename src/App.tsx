import { PropsWithChildren, ReactNode } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Layout from "./layout/default"

export default function App({ children }: PropsWithChildren<any>): ReactNode {
  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname
        }}
      />

      <Layout>
        <Outlet></Outlet>
      </Layout>
    </>
  )
}
