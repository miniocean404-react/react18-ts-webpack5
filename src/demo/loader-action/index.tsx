import styles from "./index.module.scss"
import { useActionData, useFetcher, useLoaderData } from "react-router-dom"
import { useEffect } from "react"

function LoaderAndAction() {
  // 获取当前路由的 action loader 的数据
  const loaderData = useLoaderData()
  let actionData = useActionData()
  const fetcher = useFetcher()

  useEffect(() => {
    console.log(fetcher)
    if (fetcher.state === "idle" && !fetcher.data) {
    }
  }, [])

  return (
    <div className={styles.box}>
      {/* @ts-ignore */}
      <span>loader 数据：{JSON.stringify(loaderData)}</span>
      <span>action 数据：{JSON.stringify(actionData)}</span>
    </div>
  )
}

export default LoaderAndAction
