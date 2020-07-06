import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import "../../styles/quote.css"

const Menu: React.FC = () => {
  const [navBackground, setNavBackground] = useState(false)
  let navRef = useRef<boolean>()
  navRef.current = navBackground

  useEffect(() => {
    const section: HTMLElement | null = document.getElementById(
      "welcome-section"
    )
    const handleScroll = () => {
      if (section) {
        const sectionSize = section.offsetHeight

        let show = document.body.scrollTop > sectionSize - 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
    }

    document.body.addEventListener("scroll", handleScroll)
    return () => {
      document.body.removeEventListener("scroll", handleScroll)
    }
  }, [setNavBackground, document.body.scrollTop])

  return (
    <Container
      style={{
        transition: "500ms ease",
        backgroundColor: navBackground ? "black" : "transparent",
      }}
    >
      <Logo> KINGA BRZESKOT</Logo>
      <ItemsWrapper>
        <MenuItem onClick={() => scrollTo("#about-section")}>O mnie</MenuItem>
        <MenuItem
          onClick={() => {
            scrollTo("#skills-section")
          }}
        >
          Umiejętności
        </MenuItem>
        <MenuItem onClick={() => scrollTo("#opinions-section")}>
          Opinie
        </MenuItem>
        <MenuItem onClick={() => scrollTo("#contact-section")}>
          Kontakt
        </MenuItem>
      </ItemsWrapper>
    </Container>
  )
}

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  margin-right: 10px;
  position: fixed !important;
  z-index: 99;
  height: 50px;
  color: white;
`

const MenuItem = styled.li`
  width: 25%;
  cursor: pointer;
  transition: letter-spacing 0.4s;
  &:hover {
    letter-spacing: 1px;
  }
`
const ItemsWrapper = styled.ul`
  width: 500px;
  display: flex;
  float: right;
  list-style-type: none;
  justifycontent: "space-evenly";
  margin-top: 10px;
`

const Logo = styled.p`
  display: flex;
  float: left;
  margin-left: 30px;
  padding-top: 10px;
  font-size: 25px;
  font-family: LovedbytheKing-Regular;
`

export default Menu
