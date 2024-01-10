import styles from "./index.module.scss"
import { Form, useFetcher, useRevalidator } from "react-router-dom"
import { useEffect } from "react"

function FormPage() {
  const fetcher = useFetcher()

  // 重新校验数据
  let revalidator = useRevalidator()

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      // fetcher.load("/loader-action/1")
    }

    revalidator.revalidate()
  }, [fetcher])

  const fetcherSubmit = () => {
    fetcher.submit({ id: 1 }, { method: "post", action: "loader-action/123" })
  }

  return (
    <div className={styles.box}>
      <Form method='post' action='/loader-action'>
        <button>Form 表单</button>
      </Form>

      <fetcher.Form method='post' action='/loader-action/123'>
        <button onClick={fetcherSubmit}>fetcher.Form 表单</button>
      </fetcher.Form>
    </div>
  )
}

export default FormPage
