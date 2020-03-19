import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import style from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={style.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer
