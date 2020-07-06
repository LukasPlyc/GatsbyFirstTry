import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function products({ data }) {
  const products = data.allContentfulProduct.edges
  return (
    <Layout>
      <SEO title="Products" />
      <Link to="/">Home</Link> <br />
      {products.map(({ node }) => {
        return (
          <div key={node.id}>
            <h3>{node.title}</h3>
            <p>{node.description.description}</p>
            <img src={node.image.fixed.src} alt={node.title} />
          </div>
        )
      })}
    </Layout>
  )
}
// Test
export const ProducsQuery = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          title
          id
          description {
            description
          }
          price
          image {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`
