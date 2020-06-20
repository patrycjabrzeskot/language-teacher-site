import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import GlobalStyle from "../styles/globalStyles"
import Welcome from "../components/sections/welcome"
import About from "../components/sections/about"
import Quote from "../components/sections/quote"

const IndexPage = () => (
  // <Layout>

  <Layout>
    <Welcome />
    <About
      title="O mnie"
      description="Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl"
    />
    <Quote />
    <About />
    <Quote />

    {/* <SEO title="Home" /> */}
    <GlobalStyle />
  </Layout>
)

export default withI18n()(IndexPage)
