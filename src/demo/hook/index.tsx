import { useEffect } from "react"
import styles from "./index.module.scss"
import {
  useAsyncValue,
  useBeforeUnload,
  useHref,
  useLocation,
  useMatch,
  useMatches,
  useNavigation,
  useNavigationType,
  useParams,
  useResolvedPath,
  useRouteLoaderData,
  useSearchParams,
} from "react-router-dom"

function Hook() {
  // 获取 hook/:id 中的 id 的参数
  const params = useParams()
  const [query, setQuery] = useSearchParams()
  // 可以获取 Vue 的 params 但是这里是 state
  const location = useLocation()

  // 在页面发生跳转，比如点击一个<Link/>或者提交发送一个表单数据，通过这个hook就可以对数据进行对应的处理
  // 与 fetcher 类似
  const navigation = useNavigation()

  // 这个hooks返回当前的导航类型或者用户是如何来到当前页面的或者通过历史栈上的弹出、推送或替换action
  const navigationType = useNavigationType()

  // relative 根据当前匹配的 route 的路径还是 location.href 的路径来获取相对参数
  const path = useResolvedPath({ pathname: "../../xxx", search: "id=1", hash: "3" }, { relative: "path" })
  // 与上方一致，返回的是字符串
  const href = useHref({ pathname: "../../xxx", search: "id=1", hash: "3" }, { relative: "path" })

  const variants = useAsyncValue()

  // 获取当前父级已经渲染的 id 的 loader data，id 可以是 react-router 内部的路由id
  const demoData = useRouteLoaderData("demo")

  // 只匹配当前页面完整的 /demo/hook/:id 的地址
  const match = useMatch({
    path: "/demo/hook/:id",
    // 是否精确匹配
    end: false,
    // 是否区分大小写
    caseSensitive: true,
  })

  // 获取已经激活的路由匹配项目
  const matches = useMatches()

  // 在用户导航离开之前将其保存下来
  useBeforeUnload(() => {
    console.log("刷新页面之前")
  })

  useEffect(() => {
    init().then()
  }, [])

  const init = async () => {
    console.log("path", path)
    console.log("href", href)

    console.log("location", location)
    console.log("match", match)
    console.log("matches", matches)
    console.log("navigation", navigation)
    console.log("navigationType", navigationType)
    console.log("demoData", demoData)

    // @ts-ignore
    // console.log(await variants.json())
  }

  return (
    <div hidden={false} className={styles.box}>
      <span>query 参数:</span>
      {query.get("name")}
      {query.get("age")}
      <span>params 参数:</span>
      {params.id}
      <span>state 参数:</span>
      {location.state?.id}
    </div>
  )
}

export default Hook
