import React from "react"
import Image from "../images/image"
import styled from "styled-components"
import "./quote.css"

const Container = styled.div`
  line-height: 80px;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-size: 40px;
  font-family: LovedbytheKing-Regular;
  max-width: 55%;
`

const Inner = styled.div`
  border: 1px solid #000;
  padding-top: 20px;
`
const Author = styled.span`
  display: inline-block;
  vertical-align: right;
  line-height: normal;
  font-weight: 300;
  font-size: 30px;
  font-family: LovedbytheKing-Regular;
  margin-left: 300px;
`

export interface QuoteProps {
  text: string
  author: string
}

const Quote = props => {
  return (
    <Container>
      <Inner>
        <Text>{props.text}</Text>
        <br />
        <Author>- {props.author}</Author>
      </Inner>
    </Container>
  )
}

export default Quote
