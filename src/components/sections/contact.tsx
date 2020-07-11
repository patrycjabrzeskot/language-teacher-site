import React from "react"
import { Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { Container, Col, Row } from "react-bootstrap"

const Contact: React.FC = () => {
  return (
    <>
      <Container
        id="contact-section"
        style={{
          marginTop: 50,
          marginBottom: 80,
          fontFamily: "Lato",
          paddingLeft: 80,
        }}
      >
        <hr style={{ marginBottom: 20 }} />
        <Row>
          <Col xs={6} md={6}>
            <h2>Masz pytania?</h2>
            <span style={text}>
              Napisz do mnie a postaram się jak najszybciej odpowiedzieć.
            </span>
          </Col>
          <Col xs={6} md={6}>
            <span style={textContact}>
              <Icon name="envelope" />
              &nbsp; contact@gmail.com
            </span>
            <br />
            <br />
            <span style={textContact}>
              <Icon name="phone" />
              &nbsp; 123 123 123
            </span>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const text = {
  verticalAlign: "middle",
  fontSize: 18,
  fontFamily: "Lato",
  lineHeight: 4,
}

const textContact = {
  verticalAlign: "middle",
  fontSize: 18,
  fontFamily: "Lato",
  lineHeight: 2,
}
export default Contact
