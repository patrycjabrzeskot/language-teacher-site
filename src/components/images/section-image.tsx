import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const image = graphql`
  fragment image on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const SectionImage = props => {
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

  // const SectionImage = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "about1.jpg" }) {
  //         childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `)

  return <Img fluid={data[props.picture].childImageSharp.fluid} />
}

export default SectionImage
