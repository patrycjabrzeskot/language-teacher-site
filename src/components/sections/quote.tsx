import React from "react"
import styled from "styled-components"
import "../../styles/quote.css"

export interface QuoteProps {
  text: string
  author: string
}

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
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
const Container = styled.div`
  line-height: 80px;
  text-align: center;
  margin-left: 12%;
  margin-right: 12%;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-size: 2.8vw;
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
  // font-size: 30px;
  font-size: 2vw;
  font-family: LovedbytheKing-Regular;
  margin-left: 300px;
`

export default Quote
