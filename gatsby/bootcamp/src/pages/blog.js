import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import style from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ol className={style.posts}>
        {data.allMarkdownRemark.edges.map(edge => (
          <li className={style.post}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
