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
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const ImageProfile = props => {
  const data = useStaticQuery(graphql`
    query {
      profile1: file(relativePath: { eq: "profile1.jpg" }) {
        ...circleImage
      }
      profile2: file(relativePath: { eq: "profile2.jpg" }) {
        ...circleImage
      }
      profile3: file(relativePath: { eq: "profile3.jpg" }) {
        ...circleImage
      }
      profile4: file(relativePath: { eq: "profile4.jpg" }) {
        ...circleImage
      }
      profile5: file(relativePath: { eq: "profile5.jpg" }) {
        ...circleImage
      }
    }
  `)

  return <Img fixed={data[props.picture].childImageSharp.fixed} />
}

export default ImageProfile
