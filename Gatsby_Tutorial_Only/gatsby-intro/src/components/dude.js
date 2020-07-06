import React from "react"

import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const getDdude = graphql`
  {
    file(relativePath: { eq: "test-images/test1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default function dude() {
  return (
    <StaticQuery
      query={getDdude}
      render={data => {
        console.log(data)
        return <Img fluid={data.file.childImageSharp.fluid} />
      }}
    />
  )
}
