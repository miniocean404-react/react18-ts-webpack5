import styles from "./index.module.scss"
import { Form, useActionData, useFetcher, useLoaderData, useRevalidator, useSubmit } from "react-router-dom"
import { useEffect } from "react"

function FormPage() {
  const submit = useSubmit()
  // 触发某个路由的 action，并刷重新执行页面导致触发自己的 loader ，且并不会导航
  const fetcher = useFetcher({ key: "form-page" })

  // 获取当前路由的 action loader 的数据
  const loaderData = useLoaderData()
  let actionData = useActionData()

  // 重新校验数据
  let revalidator = useRevalidator()

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      // fetcher.load("/demo/form")
    }

    console.log(fetcher, actionData)
  }, [fetcher, actionData])

  const fetcherSubmit = () => {
    fetcher.submit({ hook: "fetcher", action: "submit" }, { method: "POST", action: "/demo/form" })
  }

  const handleUseSubmit = () => {
    submit({ hook: "useSubmit", action: "submit" }, { method: "POST", action: "/demo/form" })
  }

  return (
    <div className={styles.box}>
      {/* 给某个路由的 action 传递参数 */}
      <Form method='POST' action={"/demo/form"}>
        <input type='text' name='hook' placeholder='hook' />
        <input type='text' name='action' placeholder='action' />
        <button type='submit'>Login</button>
      </Form>

      <fetcher.Form>
        <button onClick={fetcherSubmit}>fetcher.Form 表单</button>
        <button onClick={handleUseSubmit}>useSubmit 表单</button>
      </fetcher.Form>

      {/* @ts-ignore */}
      <span>loader 数据：{JSON.stringify(loaderData)}</span>
      <span>action 数据：{JSON.stringify(actionData)}</span>
    </div>
  )
}

export default FormPage
