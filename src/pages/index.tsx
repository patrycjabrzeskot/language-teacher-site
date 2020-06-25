import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import GlobalStyle from "../styles/globalStyles"
import Welcome from "../components/sections/welcome"
import About from "../components/sections/about"
import Quote from "../components/sections/quote"
import Skills from "../components/sections/skills"
import Opinions from "../components/sections/opinions"
import Contact from "../components/sections/contact"
import ImageGallery from "../components/images/gallery-image"

const IndexPage = () => {
  return (
    <Layout>
      <Welcome />
      <About />
      <Quote
        text="„Inny język jest inną wizją życia.”"
        author="Federico Fellini"
      />
      <Skills />
      <Quote
        text="„Iloma językami mówisz – tyle razy żyjesz. Jeśli znasz tylko jeden, żyjesz tylko raz.”"
        author="Czeskie przysłowie"
      />
      <Opinions />
      <Contact />
      <ImageGallery />

      <GlobalStyle />
    </Layout>
  )
}

export default IndexPage
