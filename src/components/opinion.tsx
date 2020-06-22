import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { ResponsiveEmbed, Image } from "react-bootstrap"
import AboutImage from "./images/about-image"
import ImageProfile from "./images/profile1"

const Opinion = props => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <ImageProfile />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Opinion
