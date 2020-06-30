import Layout from "../layout/layout"
import { Link } from "gatsby"

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
    <div id="welcome-section">
      <Container>
        <Image />
        <Inner>
          <br />
          <Name>Ups! Ta strona nie istnieje</Name>
          <br />
          <Text>
            Kliknij{" "}
            <u>
              <Link to="/" style={{ color: "white" }}>
                tutaj
              </Link>
            </u>{" "}
            aby przejść do głównej strony
          </Text>
        </Inner>
      </Container>
      <Footer>Copyright © 2020 Patrycja Brzeskot</Footer>
    </div>
  )
}

export default NotFoundPage
