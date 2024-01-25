import { useNavigate } from "react-router-dom"
import styles from "./index.module.scss"

function Test() {
  const navigate = useNavigate()

  const jump = () => {
    navigate("/")
  }

  return (
    <div className={styles.box} onClick={jump}>
      Test
    </div>
  )
}
export default Test
