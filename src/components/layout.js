import React from "react"
import "./tailwind.css"

const layoutClasses = "flex items-center justify-center h-screen sans"

export default ({ children }) => (
  <div className={layoutClasses}>
    <div>{children}</div>
  </div>
)
