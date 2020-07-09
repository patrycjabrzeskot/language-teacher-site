import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ImageProfile from "../imageComponents/ImageProfile"
import { Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import styled from "styled-components"

export interface OpinionProps {
  picture: string
  name: string
  desc: string
}

const Opinion: React.FC<OpinionProps> = (props: OpinionProps) => {
  return (
    <>
      <Container style={{ paddingLeft: 50 }}>
        <Row>
          <Col xs={2} md={2}>
            <ImageProfile picture={props.picture} />
          </Col>
          <Col xs={1} md={1}>
            {" "}
          </Col>
          <Col xs={7} md={7}>
            <Name>{props.name}</Name>
            <p>
              <Icon name="star" color="yellow" size="small" />
              <Icon name="star" color="yellow" size="small" />
              <Icon name="star" color="yellow" size="small" />
              <Icon name="star" color="yellow" size="small" />
              <Icon name="star" color="yellow" size="small" />
            </p>
            <Text>{props.desc}</Text>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const Name = styled.h2`
  font-family: Lato;
  font-size: 1.2vw;
`

const Text = styled.p`
  font-family: Lato;
  font-size: 1vw;
`
export default Opinion
