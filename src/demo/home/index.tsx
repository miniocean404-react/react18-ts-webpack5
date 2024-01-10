import { generatePath, NavLink, Outlet, ScrollRestoration, useLoaderData, useNavigate, useOutlet } from "react-router-dom"
import { Button } from "antd"
import styles from "./index.module.scss"

function DemoHome() {
  const navigation = useNavigate()
  const outlet = useOutlet()

  const jump = () => {
    navigation({ pathname: "hook/1", search: "name=mini&age=18" }, { state: { id: 1 } })
  }

  return (
    <div className={styles.box}>
      <div style={{ height: 2000, paddingTop: 1000 }}>
        {/* end 表示精准匹配 */}
        <Button type='primary'>
          <NavLink
            to={{ pathname: "hook/1", search: "name=mini&age=18" }}
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
            state={{ id: 1 }}
            end
          >
            NavLink 跳转
          </NavLink>
        </Button>

        <Button type='primary'>
          <div onClick={jump}>navigation 跳转</div>
        </Button>

        <Button type='primary'>
          <NavLink to={{ pathname: "/" }}>form 跳转</NavLink>
        </Button>

        <Button type='primary'>
          <NavLink to={generatePath("loader-action/:id/*", { id: "1", "*": "a.jpg" })}>loader 跳转</NavLink>
        </Button>

        {outlet}

        <ScrollRestoration getKey={(location, matches) => location.key} />
      </div>
    </div>
  )
}

export default DemoHome
