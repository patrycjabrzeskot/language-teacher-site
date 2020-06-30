import React from "react"
import "./layout.css"
import Menu from "../components/menu"
import "bootstrap/dist/css/bootstrap.min.css"
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
  return (
    <>
      <div>
        <Menu />
        {children}
      </div>
      <Footer>Copyright © 2020 Patrycja Brzeskot</Footer>
    </>
  )
}

export default Layout
