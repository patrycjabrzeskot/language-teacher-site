import React from "react"
//import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import "../../styles/quote.css"
import useMenuColor from "../utilities/useMenuColor"

const Menu: React.FC = () => {
  const navBackgroundColor = useMenuColor()

  return (
    <div
      style={{
        transition: "500ms ease",
        backgroundColor: navBackgroundColor ? "black" : "transparent",
        top: 0,
        left: 0,
        right: 0,
        marginRight: 10,
        position: "fixed",
        zIndex: 99,
        height: "7%",
        color: "white",
      }}
    >
      <h4> KINGA BRZESKOT</h4>
      <ul>
        <li onClick={() => scrollTo("#about-section")}>O mnie</li>
        <li
          onClick={() => {
            scrollTo("#skills-section")
          }}
        >
          Umiejętności
        </li>
        <li onClick={() => scrollTo("#opinions-section")}>Opinie</li>
        <li onClick={() => scrollTo("#contact-section")}>Kontakt</li>
      </ul>
    </div>
  )
}

export default Menu
