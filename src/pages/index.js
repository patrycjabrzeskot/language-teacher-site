import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import GlobalStyle from "../styles/globalStyles"
import Welcome from "../components/sections/welcome"
import About from "../components/sections/about"
import Quote from "../components/sections/quote"

var bgColors = {
  Peach: "#e3d4da",
  Blue: "#90a7c4",
  Fire: "#496595",
}

const IndexPage = () => (
  // <Layout>

  <Layout>
    <Welcome />
    <About
      title="O mnie"
      description="Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl"
    />
    <Quote
      style={{ backgroundColor: bgColors.Blue }}
      text="„Inny język jest inną wizją życia.”"
      author="Federico Fellini"
    />
    <About />
    <Quote
      style={{ backgroundColor: bgColors.Blue }}
      text="„Iloma językami mówisz – tyle razy żyjesz. Jeśli znasz tylko jeden, żyjesz tylko raz.”"
      author="Czeskie przysłowie"
    />
    <GlobalStyle />
  </Layout>
)

export default IndexPage
