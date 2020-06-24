import React from "react"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

const Container = styled.div`
  line-height: 50px;
  text-align: center;
  padding: 50px;
  margin-left: 100px;
  margin-right: 100px;
  font-family: Lato;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 25px;
  max-width: 50%;
`

const Contact = () => {
  return (
    <>
      <Container id="contact-section">
        <Text>
          <Icon name="envelope" /> contact@gmail.com
        </Text>
        <br />
        <Text>
          <Icon name="phone" /> 123 123 123
        </Text>
      </Container>
    </>
  )
}

export default Contact
