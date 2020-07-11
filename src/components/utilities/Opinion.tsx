import React, { Fragment } from "react"
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
          <Col sm={2} xs={3} md={2}>
            <ImageProfile picture={props.picture} />
          </Col>
          <Col xs={1} md={1}>
            {" "}
          </Col>
          <Col sm={7} xs={7} md={7}>
            <h2 style={name}>{props.name}</h2>
            <Icon name="star" color="yellow" size="small" />
            <Icon name="star" color="yellow" size="small" />
            <Icon name="star" color="yellow" size="small" />
            <Icon name="star" color="yellow" size="small" />
            <Icon name="star" color="yellow" size="small" />
            <p style={text}>{props.desc}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const name = {
  fontFamily: "Lato",
  //fontSize: "1.2%",
  marginBottom: 5,
}

const text = {
  fontFamily: "Lato",
  fontSize: 15,
}
export default Opinion
