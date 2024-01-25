import { newRouters } from "@/router"
import { PropsWithChildren, ReactNode, cloneElement } from "react"
import { Outlet, ScrollRestoration, useNavigationType, useOutlet } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { KeepAlive } from "react-activation"
import "./style.scss"

const ANIMATION_MAP = {
  PUSH: "forward",
  POP: "back",
  REPLACE: "fade-route",
}

function Default({ children }: PropsWithChildren<any>): ReactNode {
  const navigateType = useNavigationType()
  const { nodeRef } = newRouters.find((route) => route.path === location.pathname) ?? {}
  const fullPath = `${location.pathname}${location.search}`

  return (
    <>
      <ScrollRestoration getKey={(location, matches) => location.pathname} />

      <TransitionGroup childFactory={(child) => cloneElement(child, { classNames: `${ANIMATION_MAP[navigateType]}` })}>
        <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={5000} unmountOnExit>
          {() => (
            <div ref={nodeRef}>
              {/* <KeepAlive id={fullPath} saveScrollPosition='screen' name={fullPath}></KeepAlive> */}
              <Outlet />
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default Default
