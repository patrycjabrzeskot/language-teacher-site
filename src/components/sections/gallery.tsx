import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-bootstrap"
import ImageGallery from "../images/gallery-image"

const GalleryContainer = styled.div`
  background-color: blue;
`

const Gallery = () => {
  return (
    <GalleryContainer>
      <Row>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal1" />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal2" />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal6" />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal4" />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal5" />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal3" />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal7" />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal8" />
        </Col>
        <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
          <ImageGallery picture="gal9" />
        </Col>
      </Row>
    </GalleryContainer>
  )
}

export default Gallery
