import React from "react"
import Nav from "./nav"
export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Nav />
    {children}
  </div>
)
