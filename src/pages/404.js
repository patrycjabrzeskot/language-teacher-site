import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div style={{ marginTop: 100, marginLeft: 30 }}>
      <SEO title="404: Not found" />
      <h2>Sorry. This site doesn't exist</h2>
    </div>
  </Layout>
)

export default NotFoundPage
