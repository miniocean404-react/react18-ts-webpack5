import { Link, Outlet, ScrollRestoration } from "react-router-dom"
import styles from "./index.module.scss"

function Home() {
  return (
    <h2 className={styles.box}>
      home
      <ScrollRestoration
        getKey={(location, matches) => {
          // default behavior
          return location.key
        }}
      />
      <Link to={"other"}>1111</Link>
      <Outlet />
    </h2>
  )
}
export default Home
