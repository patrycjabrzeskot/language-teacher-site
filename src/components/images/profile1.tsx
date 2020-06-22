import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const circleImage = graphql`
  fragment circleImage on File {
    childImageSharp {
      fixed(width: 400, height: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const ImageProfile = props => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "profile1.jpg" }) {
        ...circleImage
      }
    }
  `)

  return <Img fixed={data.image1.childImageSharp.fixed} />
}

export default ImageProfile
