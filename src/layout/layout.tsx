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
  height: 6vh;
  line-height: 6vh;
  color: #edecf2;
  font-family: Lato;
  text-align: right;
  padding-right: 5vh;
  font-size: 0.9vw;
`
export default Layout
