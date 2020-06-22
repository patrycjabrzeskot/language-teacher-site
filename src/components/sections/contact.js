import React from "react"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

const Container = styled.div`
  ${"" /* ${"" /* min-height: 400px; */} */}
  line-height: 50px;
  text-align: center;
  padding: 50px;
  margin-left: 100px;
  margin-right: 100px;
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
      <Container>
        <Text>
          <Icon name="envelope" /> kingabrzeskot@gmail.com
        </Text>
        <br />
        <Text>
          <Icon name="phone" /> 530 819 891
        </Text>
      </Container>
    </>
  )
}

export default Contact
