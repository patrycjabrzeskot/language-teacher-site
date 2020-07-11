import React from "react"
import "./layout.css"
import Menu from "../components/utilities/Menu"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const Layout: React.FC = ({ children }) => {
  const myFooter = {
    backgroundColor: "#161426",
    height: 50,
    lineHeight: 3,
    color: "#edecf2",
    fontFamily: "Lato",
    paddingRight: 10,
    fontSize: 16,
  }
  return (
    <>
      <Menu />
      {children}
      <footer style={{ ...myFooter, textAlign: "right" }}>
        Copyright © 2020 Patrycja Brzeskot
      </footer>
    </>
  )
}

export default Layout
