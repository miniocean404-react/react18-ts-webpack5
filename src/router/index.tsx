import { RouteObject, createBrowserRouter, json, redirect } from "react-router-dom"
import { RefObject, createRef, lazy } from "react"

import App from "../App"
import NotFound from "@/pages/404"
import ErrorPage from "@/pages/error"
import Test from "@/pages/test"
import Home from "@/pages/home"

// const Home = lazy(() => import("@/pages/home/index"))
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
        index: true,
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  // 404找不到
  { path: "*", element: <NotFound /> },
]

routes.push(demoRoute)

/**
 * 将路由展平，并添加 nodeRef 字段
 * @param routerParams RouteObject[]
 * @returns RouteObject[]
 */
function flatRouters(routerParams: RouteObject[]) {
  let newRouters: Array<RouteObject & { nodeRef: RefObject<any> }> = []
  routerParams.forEach((router) => {
    newRouters.push({
      ...router,
      nodeRef: createRef(),
    })
    if (router.children?.length) {
      newRouters = newRouters.concat(flatRouters(router.children))
    }
  })
  return newRouters
}

const newRouters = flatRouters(routes)

// 也可以使用 useRoutes
const router: BrowserRouterType = createBrowserRouter(routes, { basename: "/" })

export { newRouters }
export default router
