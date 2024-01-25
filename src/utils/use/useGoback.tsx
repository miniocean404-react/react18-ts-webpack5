// useGoBack.tsx

import { useNavigate } from "react-router-dom"
import { useAliveController } from "react-activation"

// 页面返回 hooks
const useGoBack = () => {
  const navigate = useNavigate()
  const { dropScope, getCachingNodes } = useAliveController()

  return (pageNum = -1) => {
    const allCachingNodes = getCachingNodes() || []
    navigate(pageNum)
    // 清除 keepAlive 节点缓存
    const pageNumAbs = Math.abs(pageNum)
    const dropNodes = allCachingNodes.slice(allCachingNodes.length - pageNumAbs)
    dropNodes.forEach((node) => {
      dropScope(node.name!)
    })
  }
}

export default useGoBack
