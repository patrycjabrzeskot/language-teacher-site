import React from "react"
import Image from "../images/image"
import styled from "styled-components"
import "./quote.css"

const Container = styled.div`
  ${"" /* min-height: 400px; */}
  line-height: 100px;
  text-align: center;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-weight: 300;
  font-size: 55px;
  font-family: LovedbytheKing-Regular;
  color: white;
  max-width: 55%;
`
const Author = styled.span`
  display: inline-block;
  vertical-align: right;
  line-height: normal;
  font-weight: 300;
  font-size: 45px;
  font-family: LovedbytheKing-Regular;
  color: white;
  margin-left: 350px;
`

const Quote = props => {
  console.log(props)
  return (
    <Container style={props.style}>
      <Text>
        <br />
        {props.text}
      </Text>
      <br />
      <Author>- {props.author}</Author>
      <Text>
        <br />
        <p style={{ visibility: "hidden" }}>footer</p>
      </Text>{" "}
      <Text></Text>{" "}
    </Container>
  )
}

export default Quote
