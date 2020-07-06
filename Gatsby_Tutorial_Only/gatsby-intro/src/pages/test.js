import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function test() {
  return (
    <div>
      <Layout>
        <SEO title="Test Page" />
        <Link to="/">Back to home page</Link>
      </Layout>
    </div>
  )
}
