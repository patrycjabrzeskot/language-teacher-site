import React from "react"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { Container, Col, Row } from "react-bootstrap"

// const Container = styled.div`
//   line-height: 50px;
//   text-align: center;
//   padding: 50px;
//   margin-left: 100px;
//   margin-right: 100px;
//   margin-bottom: 100px;
// `

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 25px;
  max-width: 50%;
  font-family: Lato;
`

const Contact = () => {
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
        <hr style={{ marginBottom: 50 }} />
        <Row>
          <Col xs={6} md={6}>
            <h2 style={{ fontSize: 40, paddingBottom: 10 }}>Masz pytania?</h2>
            Napisz do mnie a postaram się jak najszybciej odpowiedzieć.
          </Col>
          <Col xs={6} md={6}>
            <Text>
              <Icon name="envelope" /> contact@gmail.com
            </Text>
            <br />
            <br />
            <Text>
              <Icon name="phone" /> 123 123 123
            </Text>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact
