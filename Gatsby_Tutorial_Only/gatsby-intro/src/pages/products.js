import React from "react"

import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function products({ data }) {
  const products = data.products.edges
  return (
    <Layout>
      <SEO title="Products" />
      <Link to="/">Home</Link> <br />
      {products.map(({ node: product }) => {
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description.description}</p>
            <Img fixed={product.image.fixed} /> <br></br>
            <Link to={`/products/${product.title}`}>Read More</Link>
          </div>
        )
      })}
    </Layout>
  )
}
// Test
export const ProducsQuery = graphql`
  {
    products: allContentfulProduct {
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
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
