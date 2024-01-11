import { Await, generatePath, json, redirect, RouteObject } from "react-router-dom"

import DemoHome from "@/demo/home/index"
import ErrorPage from "@/pages/error/index"
import Hook from "@/demo/hook/index"
import LoaderAndAction from "@/demo/loader-action/index"
import FormPage from "@/demo/from/index"

const demoRoute: RouteObject = {
  path: "demo",
  id: "demo",
  element: <DemoHome />,
  loader: ({ params }) => json({ load: "demo-load" }),
  // 在路由组件加载过程中发生错误时展示的元素
  errorElement: <ErrorPage />,
  children: [
    {
      id: "hook",
      path: "hook/:id",
      element: (
        <Await resolve={json({ await: "await 值" })}>
          <Hook />
        </Await>
      ),
    },
    {
      path: "redirect",
      // 可以在 loader 及 action 中使用 redirect
      loader: ({ params }) => redirect("/demo/form"),
    },
    {
      path: "form",
      id: "form",
      element: <FormPage />,
    },
    {
      path: "loader-action/:id/*",
      action: async ({ params, request }) => {
        console.log("action-loaded")

        const formData = await request.formData()

        const username = formData.get("username")
        const password = formData.get("password")

        console.log(username, password, request)
        return { id: "action" }
      },
      // 在路由导航完成之前执行，类似于vue router的路由前置守卫
      loader: ({ params, request }) => {
        console.log("loader-loaded")

        return json({ id: "loader" })
      },
      element: <LoaderAndAction />,
    },
  ],
}

export default demoRoute
