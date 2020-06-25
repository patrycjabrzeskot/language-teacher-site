import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Col, Row } from "react-bootstrap"

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

export const galleryImg = graphql`
  fragment galleryImg on File {
    childImageSharp {
      fluid(maxWidth: 150, maxHeight: 150) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      gal1: file(relativePath: { eq: "gallery/gal1.jpg" }) {
        ...galleryImg
      }
      gal2: file(relativePath: { eq: "gallery/gal2.jpg" }) {
        ...galleryImg
      }
      gal3: file(relativePath: { eq: "gallery/gal3.jpg" }) {
        ...galleryImg
      }
      gal4: file(relativePath: { eq: "gallery/gal4.jpg" }) {
        ...galleryImg
      }
      gal5: file(relativePath: { eq: "gallery/gal5.jpg" }) {
        ...galleryImg
      }
      gal6: file(relativePath: { eq: "gallery/gal6.jpg" }) {
        ...galleryImg
      }
      gal7: file(relativePath: { eq: "gallery/gal7.jpg" }) {
        ...galleryImg
      }
      gal8: file(relativePath: { eq: "gallery/gal8.jpg" }) {
        ...galleryImg
      }
      gal9: file(relativePath: { eq: "gallery/gal9.jpg" }) {
        ...galleryImg
      }
    }
  `)

  const myitems = Object.keys(data).map(gal => (
    <>
      <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Img fluid={data[gal].childImageSharp.fluid} />
      </Col>
    </>
  ))

  return <Row>{myitems}</Row>
}

export default ImageGallery
