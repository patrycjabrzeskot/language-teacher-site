import React from "react"
import Layout from "../layout/layout"
import Welcome from "../components/sections/welcome"
import About from "../components/sections/about"
import Quote from "../components/sections/quote"
import Skills from "../components/sections/skills"
import Opinions from "../components/sections/opinions"
import Contact from "../components/sections/contact"
import ImageGallery from "../components/imageComponents/ImageGallery"

const Index: React.FC = () => {
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
    </Layout>
  )
}

export default Index
