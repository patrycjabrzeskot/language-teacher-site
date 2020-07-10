import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export interface ImageProps {
  picture: string
}

export const image = graphql`
  fragment image on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const SectionImage = (props: ImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        ...image
      }
      skills: file(relativePath: { eq: "skills.jpg" }) {
        ...image
      }
    }
  `)

  return <Img fluid={data[props.picture].childImageSharp.fluid} />
}

export default SectionImage
