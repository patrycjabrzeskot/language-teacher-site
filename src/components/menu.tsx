import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import styled from "styled-components"
import { useScrollPosition } from "../hooks/useScrollPosition"
import scrollTo from "gatsby-plugin-smoothscroll"
import LanguageSwitch from "./LanguageSwitch"
// import { catalogs, prefix, deprefix, langFromPath } from "../i18n-config"
import { I18nProvider, withI18n, Trans } from "@lingui/react"
import { navigateTo } from "gatsby-link"
import { useLocation, useContext } from "react-router"
import "./sections/quote.css"
import useWindowScrollPosition from "@rehooks/window-scroll-position"

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

const Menu = () => {
  const [navBackground, setNavBackground] = useState(false)
  let navRef = useRef<boolean>()
  console.log(navRef)
  navRef.current = navBackground
  console.log(document.body.scrollTop)

  useEffect(() => {
    const section: HTMLElement | null = document.getElementById(
      "welcome-section"
    )
    const handleScroll = () => {
      console.log("section: " + section)
      if (section) {
        console.log(section.offsetHeight)
        const sectionSize = section.offsetHeight

        let show = document.body.scrollTop > sectionSize - 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
    }

    document.body.addEventListener("scroll", handleScroll)
    return () => {
      document.body.removeEventListener("scroll", handleScroll)
    }
  }, [setNavBackground, document.body.scrollTop])

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
    <Container
      style={{
        transition: "500ms ease",
        backgroundColor: navBackground ? "black" : "transparent",
      }}
    >
      {/* <LanguageSwitch lang={props.language} onLangClick={onLangChange} /> */}

      <Logo> KINGA BRZESKOT</Logo>
      <ItemsWrapper>
        <MenuItem onClick={() => scrollTo("#about-section")}>O mnie</MenuItem>
        <MenuItem
          onClick={() => {
            console.log(document.body.scrollTop)
            scrollTo("#skills-section")
          }}
        >
          Umiejętności
        </MenuItem>
        <MenuItem onClick={() => scrollTo("#opinions-section")}>
          Opinie
        </MenuItem>
        <MenuItem onClick={() => scrollTo("#contact-section")}>
          Kontakt
        </MenuItem>
      </ItemsWrapper>
    </Container>
  )
}

export default Menu
