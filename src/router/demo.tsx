import { Await, generatePath, json, redirect } from "react-router-dom"

import DemoHome from "@/demo/home/index"
import ErrorPage from "@/pages/error/index"
import Hook from "@/demo/hook/index"
import LoaderAndAction from "@/demo/loader-action/index"
import FormPage from "@/demo/from/index"

const demoRoute = {
  path: "demo",
  id: "demo",
  element: <DemoHome />,
  loader: ({ params }) => json({ load: "demo-load" }),
  // 在路由组件加载过程中发生错误时展示的元素
  errorElement: <ErrorPage />,
  children: [
    {
      path: "hook/:id",
      element: (
        <Await resolve={json({ await: "await 值" })}>
          <Hook />
        </Await>
      ),
    },
    {
      path: "form",
      id: "form",
      loader: ({ params }) => json({ load: "fetch-load" }),
      element: <FormPage />,
    },
    {
      path: "redirect",
      // 可以在 loader 及 action 中使用 redirect
      loader: ({ params }) => redirect("/demo/form"),
    },
    {
      path: generatePath("loader-action/:id/*", { id: "1", "*": "a.jpg" }),
      // 在路由导航完成之前执行，类似于vue router的路由前置守卫
      loader: ({ params }) => json({ id: 1 }),
      action: ({ params, request }) => json({ id: 1 }),
      element: <LoaderAndAction />,
    },
  ],
}

export default demoRoute
