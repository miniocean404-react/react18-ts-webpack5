import styles from "./index.module.scss"
import { Form, useFetcher, useRevalidator, useSubmit } from "react-router-dom"
import { useEffect } from "react"

function FormPage() {
  const submit = useSubmit()
  // 触发某个路由的 action，并触发自己的 loader ，且并不会导航
  const fetcher = useFetcher({ key: "form-page" })

  // 重新校验数据
  let revalidator = useRevalidator()

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      // fetcher.load("/demo/form")
    }

    console.log(fetcher)
  }, [fetcher])

  const fetcherSubmit = () => {
    fetcher.submit({ hook: "fetcher", action: "submit" }, { method: "POST", action: "/demo/loader-action/2/2" })
  }

  const handleUseSubmit = () => {
    submit({ hook: "useSubmit", action: "submit" }, { method: "POST", action: "/demo/loader-action/2/2" })
  }

  return (
    <div className={styles.box}>
      {/* 给某个路由的 action 传递参数 */}
      <Form method='POST' action={"/demo/loader-action/1/1"}>
        <input type='text' name='username' placeholder='用户名' />
        <input type='password' name='password' placeholder='密码' />
        <button type='submit'>Login</button>
      </Form>

      <fetcher.Form>
        <button onClick={fetcherSubmit}>fetcher.Form 表单</button>
        <button onClick={handleUseSubmit}>useSubmit 表单</button>
      </fetcher.Form>
    </div>
  )
}

export default FormPage
