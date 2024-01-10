import { NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom"
import { Button } from "antd"
import styles from "./index.module.scss"

function DemoHome() {
  const navigation = useNavigate()

  const jump = () => {
    navigation({ pathname: "hook/1", search: "name=mini&age=18" }, { state: { id: 1 } })
  }

  return (
    <div className={styles.box}>
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

      <Outlet></Outlet>
    </div>
  )
}

export default DemoHome
