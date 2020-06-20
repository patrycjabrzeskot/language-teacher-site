import React from "react"
import Image from "../images/image"
import styled from "styled-components"
import "./quote.css"

const Container = styled.div`
  height: 350px;
  line-height: 350px;
  text-align: center;
  background-color: #e3d4da;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-weight: 300;
  font-size: 45px;
  font-family: LovedbytheKing-Regular;
  color: white;
`

const Quote = () => {
  return (
    <Container>
      <Text>„Inny język jest inną wizją życia.”</Text>
    </Container>
  )
}

export default Quote
