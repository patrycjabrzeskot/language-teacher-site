import React from "react"
import styled from "styled-components"
import { useScrollPosition } from "../hooks/useScrollPosition"
import scrollTo from "gatsby-plugin-smoothscroll"
import LanguageSwitch from "./LanguageSwitch"
// import { catalogs, prefix, deprefix, langFromPath } from "../i18n-config"
import { I18nProvider, withI18n, Trans } from "@lingui/react"
import { navigateTo } from "gatsby-link"
import { useLocation, useContext } from "react-router"

const Container = styled.div`
  box-shadow: 0px 0px 5px #c9c3c3;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  width: 100%;
  position: fixed !important;
  overflow: "hidden";
  z-index: 99;
  height: 50px;
`

const MenuItem = styled.li`
  width: 25%;
  cursor: pointer;
  text-shadow: 1px 1px 8px #fff;
  transition: letter-spacing 0.4s;
  &:hover {
    letter-spacing: 2px;
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
  width: 500px;
  display: flex;
  float: left;
  margin-left: 30px;
  font-weight: bold;
  margin-top: 10px;
`

// const Slider = styled.hr`
//   color: ${({ theme }) => theme.colors.heading};
//   width: 15%;
//   height: 2px;
//   margin: 5px 0 0 0;
//   transition: margin 0.5s;
//   margin-left: ${({ position }) => {
//     switch (position) {
//       case "home":
//         return "0"
//       case "about":
//         return "25%"
//       case "projects":
//         return "50%"
//       case "contact":
//         return "75%"
//     }
//   }};
// `

const Menu = props => {
  // let location = useLocation()
  // console.log(location)
  console.log("props: ")
  console.log(props)
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
    <Container>
      {/* <LanguageSwitch lang={props.language} onLangClick={onLangChange} /> */}

      <Logo> KINGA BRZESKOT</Logo>
      <ItemsWrapper>
        {/* ref={refs.menu} */}
        <MenuItem onClick={() => scrollTo("#about-section")}>
          <Trans>About me</Trans>
        </MenuItem>
        <MenuItem onClick={() => scrollTo("#skills-section")}>
          <Trans>Skills</Trans>
        </MenuItem>
        <MenuItem onClick={() => scrollTo("#opimions-section")}>
          <Trans>Opinions</Trans>
        </MenuItem>
        <MenuItem onClick={() => scrollTo("#contact-section")}>
          <Trans>Contact</Trans>
        </MenuItem>
      </ItemsWrapper>
      {/* <Slider position={scrollPosition} ref={refs.slider} /> */}
    </Container>
  )
}

// export default withI18n()(Menu)
export default Menu