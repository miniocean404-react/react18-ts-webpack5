import { RouteObject, createBrowserRouter, json, redirect } from "react-router-dom"
import { ReactNode, lazy } from "react"

import App from "../App"
const Home = lazy(() => import("@/pages/home/index"))
import demoRoute from "./demo"

type BrowserRouterType = ReturnType<typeof createBrowserRouter>

const routers: RouteObject[] = [
  {
    id: "root",
    element: <App />,
    children: [
      // 子路由需要在其父路由的页面中添加 <Outlet />
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  demoRoute,
  // 404找不到
  { path: "*", element: <div>404</div> },
]

// 也可以使用 useRoutes
const router: BrowserRouterType = createBrowserRouter(routers, { basename: "/" })

export default router
