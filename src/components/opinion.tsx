import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { ResponsiveEmbed, Image } from "react-bootstrap"
import AboutImage from "./images/section-image"
import ImageProfile from "./images/profile"
import { Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

const Opinion = props => {
  return (
    <>
      <Container style={{ paddingLeft: 50 }}>
        <Row>
          <Col xs={3} md={3}>
            <ImageProfile picture={props.picture} />
          </Col>
          <Col xs={7} md={7}>
            <h2>{props.name}</h2>
            <p>
              <Icon name="star" color="yellow" />
              <Icon name="star" color="yellow" />
              <Icon name="star" color="yellow" />
              <Icon name="star" color="yellow" />
              <Icon name="star" color="yellow" />
            </p>
            <p>{props.desc}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Opinion
