import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.css"
export default () => (
  <nav>
    <ul className={navStyles.navlist}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
      <li><Link to="/about/">About</Link></li>
    </ul>
  </nav>
)
