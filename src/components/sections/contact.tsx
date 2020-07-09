import React from "react"
import styled from "styled-components"
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
        <hr />
        <Row>
          <Col xs={6} md={6}>
            <Title>Masz pytania?</Title>
            <Text>
              Napisz do mnie a postaram się jak najszybciej odpowiedzieć.
            </Text>
          </Col>
          <Col xs={6} md={6}>
            <TextContact>
              <br />
              <Icon name="envelope" />
              &nbsp; contact@gmail.com
            </TextContact>
            <br />
            <br />
            <TextContact>
              <Icon name="phone" />
              &nbsp; 123 123 123
            </TextContact>
          </Col>
        </Row>
      </Container>
    </>
  )
}
const Title = styled.h2`
  font-size: 40px;
  padding-bottom: 20px;
  font-size: 1.8vw;
  font-family: Lato;
  padding-top: 6.5vh;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.2vw;
  font-family: Lato;
  line-height: 2vw;
`

const TextContact = styled.span`
  vertical-align: middle;
  font-size: 1.5vw;
  font-family: Lato;
  line-height: 3vw;
`
export default Contact
