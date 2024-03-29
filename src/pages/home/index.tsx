import { useNavigate } from "react-router-dom"
import styles from "./index.module.scss"

function Home() {
  const navigate = useNavigate()

  const jump = () => {
    navigate("/test")
  }

  return (
    <div className={styles.box} onClick={jump}>
      home
    </div>
  )
}
export default Home
