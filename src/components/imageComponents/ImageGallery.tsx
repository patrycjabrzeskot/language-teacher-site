import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Col, Row } from "react-bootstrap"

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

  const myItems = Object.keys(data).map(gal => (
    <React.Fragment key={gal}>
      <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Img fluid={data[gal].childImageSharp.fluid} />
      </Col>
    </React.Fragment>
  ))

  return <Row>{myItems}</Row>
}

export default ImageGallery
