import React, { useState } from "react"
import styled from "styled-components"
import { useScrollPosition } from "../hooks/useScrollPosition"
import scrollTo from "gatsby-plugin-smoothscroll"
import LanguageSwitch from "./LanguageSwitch"
// import { catalogs, prefix, deprefix, langFromPath } from "../i18n-config"
import { I18nProvider, withI18n, Trans } from "@lingui/react"
import { navigateTo } from "gatsby-link"
import { useLocation, useContext } from "react-router"
import "./sections/quote.css"

const Container = styled.div`
  overflow: hidden;
  top: 0;
  width: 100%;
  position: fixed !important;
  overflow: "hidden";
  z-index: 99;
  height: 50px;
  color: white;
`

const MenuItem = styled.li`
  width: 25%;
  cursor: pointer;
  transition: letter-spacing 0.4s;
  &:hover {
    letter-spacing: 1px;
  }
`
const ItemsWrapper = styled.ul`
  width: 500px;
  display: flex;
  float: right;
  list-style-type: none;
  justifycontent: "space-evenly";
  margin-top: 10px;
`

const Logo = styled.p`
  display: flex;
  float: left;
  margin-left: 30px;
  padding-top: 10px;
  font-size: 25px;
  font-family: LovedbytheKing-Regular;
`
//const [position, setPosition] = useState["top"]

const Menu = props => {
  // let listener

  // const [position, setPosition] = useState["top"]

  // const componentDidMount = () => {
  //   listener = document.addEventListener("scroll", e => {
  //     let scrolled = document.scrollingElement.scrollTop
  //     if (scrolled >= 120) {
  //       if (position !== "amir") {
  //         setPosition("amir")
  //       }
  //     } else {
  //       if (position !== "top") {
  //         setPosition("top")
  //       }
  //     }
  //   })
  // }

  // let location = useLocation()
  // console.log(location)

  //const scrollPosition = useScrollPosition()
  // const lang = langFromPath(props.location.pathname)
  // const onLangChange = lang => {
  //   console.log(
  //     "lang:" + lang + "prefix(lang)" + prefix(lang)
  //     // "deprefix(props.location.pathname" +
  //     // deprefix(props.location.pathname)
  //   )
  //   navigateTo(prefix(lang))
  // }
  return (
    <Container style={{ backgroundColor: "black" }}>
      {/* <LanguageSwitch lang={props.language} onLangClick={onLangChange} /> */}

      <Logo> KINGA BRZESKOT</Logo>
      <ItemsWrapper>
        {/* <MenuItem onClick={() => scrollTo("#about-section")}> */}
        <MenuItem>O mnie</MenuItem>
        <MenuItem>Umiejętności</MenuItem>
        <MenuItem>Opinie</MenuItem>
        <MenuItem>Kontakt</MenuItem>
      </ItemsWrapper>
    </Container>
  )
}

export default Menu
