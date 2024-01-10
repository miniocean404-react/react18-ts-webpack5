import styles from "./index.module.scss"
import { Form, useFetcher, useRevalidator } from "react-router-dom"
import { useEffect } from "react"

function FormPage() {
  const fetcher = useFetcher()

  // 重新校验数据
  let revalidator = useRevalidator()

  useEffect(() => {
    revalidator.revalidate()
  }, [fetcher])

  const load = () => {
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.load("/demo/loader-action/2/2")
    }

    console.log(fetcher)
  }

  const fetcherSubmit = () => {
    fetcher.submit({ username: "mini", password: "123", idle: true }, { method: "POST", action: "/demo/loader-action/2/2" })
  }

  return (
    <div className={styles.box}>
      {/* 给某个路由的 action 传递参数 */}
      <Form method='POST' action={"/demo/loader-action/1/1"}>
        <input type='text' name='username' placeholder='用户名' />
        <input type='password' name='password' placeholder='密码' />
        <button type='submit'>Login</button>
      </Form>

      <fetcher.Form method='POST'>
        <button onClick={fetcherSubmit}>fetcher.Form 表单</button>
        <button onClick={load}>fetcher 加载</button>
      </fetcher.Form>
    </div>
  )
}

export default FormPage
