import React from "react"
import "./layout.css"
import Menu from "../components/utilities/Menu"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer>Copyright © 2020 Patrycja Brzeskot</Footer>
    </>
  )
}

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
export default Layout
