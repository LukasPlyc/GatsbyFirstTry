import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function images({ data }) {
  const images = data.allFile.edges

  return (
    <Layout>
      <SEO title="images" />
      <h1>Images Page</h1>
      <Link to="/">Home page</Link>
      {images.map(({ node }, index) => {
        return (
          <>
            <h3 key={index}>{node.relativePath}</h3>
          </>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
