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
import Welcome from "../components/sections/welcome"
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
        {/* <Welcome></Welcome> */}
        {children}
      </div>
      <br />
      <footer>2020 Patrycja Brzeskot</footer>
      {/* </I18nProvider> */}
    </>
  )
}

export default Layout
