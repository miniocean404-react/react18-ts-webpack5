import { Await, generatePath, json, redirect, RouteObject } from "react-router-dom"

import DemoHome from "@/demo/home/index"
import ErrorPage from "@/pages/error/index"
import Hook from "@/demo/hook/index"
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
      loader: ({ params }) => redirect("/demo/form"),
    },
    {
      path: "form",
      id: "form",
      action: async ({ params, request }) => {
        const formData = await request.formData()

        const hook = formData.get("hook")
        const action = formData.get("action")

        console.log("🚀 ~ form : ~ action:", hook)

        return { id: "action", action, hook }
      },
      // 在路由导航完成之前执行，类似于vue router的路由前置守卫
      // 可以在 loader 及 action 中使用 redirect
      // loader 与 action 类似于 action 用于上传表单文件，而 loader 重新获取文件数据刷新界面
      loader: ({ params, request, context }) => {
        return { id: "loader" }
      },
      element: <FormPage />,
    },
  ],
}

export default demoRoute
