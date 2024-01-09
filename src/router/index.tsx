import { useRoutes } from "react-router-dom";
import HomePage from "@/pages/home";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      // 子路由需要在其父路由的页面中添加 <Outlet />
      {
        path: "other",
        element: <HomePage />,
      },
    ],
  },
];

// 自定义 hook
const useCustomRouter = () => {
  return useRoutes(routes);
};

export default useCustomRouter;
