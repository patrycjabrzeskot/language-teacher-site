import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ImageProfile from "../imageComponents/ImageProfile"
import { Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

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
