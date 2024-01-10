import { Link, Outlet, ScrollRestoration } from "react-router-dom"
import styles from "./index.module.scss"

function Home() {
  return (
    <div className={styles.box}>
      <ScrollRestoration
        getKey={(location, matches) => {
          // default behavior
          return location.key
        }}
      />
      <Outlet />
    </div>
  )
}
export default Home
