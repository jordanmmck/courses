import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import style from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={style.header}>
      <h1>
        <Link className={style.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link
              className={style.navItem}
              activeClassName={style.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={style.navItem}
              activeClassName={style.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={style.navItem}
              activeClassName={style.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={style.navItem}
              activeClassName={style.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
