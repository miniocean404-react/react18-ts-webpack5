import styles from "./index.module.scss"
import { Form, useFetcher, useRevalidator } from "react-router-dom"
import { useEffect } from "react"

function FormPage() {
  const fetcher = useFetcher({ key: "form-page" })

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
    fetcher.submit({ username: "mini", password: "123" }, { method: "POST", action: "/demo/loader-action/2/2", navigate: true })
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

      <h2>webpack5+react+ts</h2>
      <p>受控组件</p>
      <input type='text' value={1} onChange={() => {}} />
      <br />
      <p>非受控组件</p>
      <input type='text' />
    </div>
  )
}

export default FormPage
