import { createBrowserRouter, useRoutes } from "react-router-dom"
import Home from "@/pages/home/index"
import Other from "@/pages/other/index"

type BrowserRouterType = ReturnType<typeof createBrowserRouter>

const routers = [
  {
    path: "/",
    element: <Home />,
    children: [
      // 子路由需要在其父路由的页面中添加 <Outlet />
      {
        path: "other",
        element: <Other />,
      },
    ],
  },
]

// 也可以使用 useRoutes
const router: BrowserRouterType = createBrowserRouter(routers, { basename: "/" })

export default router
