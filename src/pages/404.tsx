import Layout from "../layout/layout"
import { Trans, I18nProvider, withI18n } from "@lingui/react"

// const NotFoundPage = () => (
//   <Layout>
//     <Welcome />
//     <div style={{ marginTop: 100, marginLeft: 30 }}>
//       <h2>Sorry. This site doesn't exist</h2>
//     </div>
//   </Layout>
// )

import React from "react"
import Image from "../components/images/image"
import styled from "styled-components"

const LayeredBox = styled.div``

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`
const Inner = styled.div`
  position: absolute;
  border: 1px solid white;
  margin-top: 50px;
  text-align: center;
  color: white;
  display: inline-block;
  vertical-align: middle;
  line-height: 100px;
  width: 60%;
  height: 50%;
  left: 20%;
  top: 15%;
`
const Name = styled.span`
  font-size: 90px;
  font-family: LovedbytheKing-Regular;
`
const Text = styled.span`
  font-size: 30px;
  font-family: Lato;
`

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

const NotFoundPage = () => {
  return (
    // <Layout>
    <div id="welcome-section">
      <Container>
        <Image />
        <Inner>
          <br />
          <Name>Ups! Ta strona nie istnieje</Name>
          <br />
          <Text>
            Click <a>here</a> to go back to the main page
          </Text>
        </Inner>
      </Container>
      <Footer>Copyright © 2020 Patrycja Brzeskot</Footer>
    </div>
    // </Layout>
  )
}

export default NotFoundPage
