import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Home from "@/pages/home/index"
import Other from "@/pages/other/index"

type BrowserRouterType = ReturnType<typeof createBrowserRouter>

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      // 子路由需要在其父路由的页面中添加 <Outlet />
      {
        path: "/",
        element: <Home />,
      },
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
