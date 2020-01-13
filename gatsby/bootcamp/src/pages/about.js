import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Man is something that should be overcome!</p>
      <Link to="/contact">contact</Link>
    </Layout>
  )
}

export default AboutPage
