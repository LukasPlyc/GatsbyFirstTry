import React from "react"

import { StaticQuery, graphql } from "gatsby"

export default function info() {
  return (
    <StaticQuery
      query={graphql`
        {
          info: site {
            siteMetadata {
              title
              author
              description
              info
            }
          }
        }
      `}
      render={data => {
        const siteData = data.info.siteMetadata
        const { title, info, description, author } = siteData
        return (
          <div style={{ fontSize: "14px" }}>
            <p>Title: {title}</p>
            <p>Info: {info}</p>
            <p>Description:{description}</p>
            <p>Author: {author}</p>
          </div>
        )
      }}
    />
  )
}
