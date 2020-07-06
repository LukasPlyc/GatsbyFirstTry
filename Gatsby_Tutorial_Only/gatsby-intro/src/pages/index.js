import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Info from "../components/info"
import Image from "../components/image"
import SEO from "../components/seo"
import Dude from "../components/dude"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Dude />
    <Info />
    <Link to="/products/">products page</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    <Link to="/test/">Test Page</Link> <br />
    <Link to="/images/">Images</Link>
  </Layout>
)

export default IndexPage
