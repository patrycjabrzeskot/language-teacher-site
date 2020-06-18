/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"
import "./layout.css"
import Welcome from "./sections/welcome"
import LanguageSwitch from "./LanguageSwitch"
import { catalogs, prefix, deprefix, langFromPath } from "../i18n-config"
import { I18nProvider, withI18n, Trans } from "@lingui/react"
import { navigateTo } from "gatsby-link"

const Layout = ({ children, lang, onLangChange }) => {
  console.log(catalogs, prefix, deprefix, langFromPath)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  onLangChange = lang => {
    console.log(
      "lang:" + lang + "prefix(lang)" + prefix(lang)
      // "deprefix(props.location.pathname" +
      // deprefix(props.location.pathname)
    )
    navigateTo(prefix(lang))
  }

  return (
    <>
      <I18nProvider language={lang} catalogs={catalogs}>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          <Menu />
          <LanguageSwitch lang={lang} onLangClick={onLangChange} />
          <Welcome></Welcome>
        </div>
      </I18nProvider>
    </>
  )
}

export default Layout
