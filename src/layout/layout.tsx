/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "../components/menu"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import LanguageSwitch from "../components/LanguageSwitch"
// import {
//   defaultLanguage,
//   catalogs,
//   prefix,
//   deprefix,
//   langFromPath,
// } from "../i18n-config"
import { I18nProvider, withI18n, Trans } from "@lingui/react"
import { navigateTo } from "gatsby-link"
import { useLocation, useContext } from "react-router"
import styled from "styled-components"

const Footer = styled.footer`
  background-color: #161426;
  height: 60px;
  color: #edecf2;
  font-family: Lato;
  text-align: right;
  padding-right: 50px;
  padding-top: 20px;
  font-size: 16px;
`
const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // const [language, setLanguage] = useState(defaultLanguage)

  return (
    <>
      {/* <I18nProvider language={language} catalogs={catalogs}> */}
      <div>
        <Menu />
        {children}
      </div>
      <Footer>Copyright © 2020 Patrycja Brzeskot</Footer>
      {/* </I18nProvider> */}
    </>
  )
}

export default Layout
