import styles from "./index.module.scss"
import { useLoaderData } from "react-router-dom"

function LoaderAndAction() {
  const data = useLoaderData()

  return (
    <div className={styles.box}>
      {/* @ts-ignore */}
      {JSON.stringify(data)}
    </div>
  )
}

export default LoaderAndAction
