import { RouteObject, createBrowserRouter, json, redirect } from "react-router-dom"
import { lazy } from "react"

import App from "../App"
import NotFound from "@/pages/404"
import ErrorPage from "@/pages/error"

const Home = lazy(() => import("@/pages/home/index"))
import demoRoute from "./demo"

type BrowserRouterType = ReturnType<typeof createBrowserRouter>

const routes: RouteObject[] = [
  {
    id: "root",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // 子路由需要在其父路由的页面中添加 <Outlet />
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // 404找不到
  { path: "*", element: <NotFound /> },
]

routes.push(demoRoute)

// 也可以使用 useRoutes
const router: BrowserRouterType = createBrowserRouter(routes, { basename: "/" })

export default router
