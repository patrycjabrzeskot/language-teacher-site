import React from "react"
import "../../styles/quote.css"

export interface QuoteProps {
  text: string
  author: string
}

const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
  return (
    <div
      style={{
        lineHeight: 2,
        textAlign: "center",
        marginLeft: "12%",
        marginRight: "12%",
      }}
    >
      <div style={inner}>
        <span style={text}>{props.text}</span>
        <br />
        <span style={author}>- {props.author}</span>
      </div>
    </div>
  )
}

const text = {
  display: "inline-block",
  verticalAlign: "middle",
  fontSize: 40,
  fontFamily: "LovedbytheKing-Regular",
  maxWidth: "55%",
}

const inner = { border: "1px solid black", paddingTop: 20 }

const author = {
  verticalAlign: "right",
  lineHeight: "normal",
  fontWeight: 300,
  fontSize: 24,
  fontFamily: "LovedbytheKing-Regular",
  marginLeft: 300,
}

export default Quote
