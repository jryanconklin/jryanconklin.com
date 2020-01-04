import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "./layout.css"

const layoutClasses =
  "d-flex align-items-center justify-content-center min-vh-100 sans"

export default ({ children }) => (
  <div className={layoutClasses}>
    <div className={"text-center"}>{children}</div>
  </div>
)
