import React from "react"
import Link from "gatsby-link"

const Lang = ({ lang, onClick, selected }) => (
  <a
    style={{
      color: "black",
      marginRight: "10px",
      textDecoration: selected ? "underline" : "none",
      cursor: "pointer",
      fontSize: "15px",
    }}
    onClick={onClick}
  >
    {lang}
  </a>
)

const LanguageSwitch = props => (
  <div
    style={{
      background: "white",
    }}
  >
    {console.log(props)}
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Lang
          lang="en"
          onClick={e => props.onLangClick("en")}
          selected={props.lang == "en"}
        />
        <Lang
          lang="pl"
          onClick={e => props.onLangClick("pl")}
          selected={props.lang == "pl"}
        />
      </h1>
    </div>
  </div>
)

export default LanguageSwitch
