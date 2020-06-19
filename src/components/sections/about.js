import React from "react"
import AboutImage from "../images/about-image"
import styled from "styled-components"
import about from "../../images/about.jpg"

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 50px;
  margin-top: 50px;
`
const DescriptionContainer = styled.div`
  padding: 40px 20px;
  margin-left: 100px;
`

const DescriptionContent = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  margin: 15px 0;
  max-width: 500px;
`

const About = () => {
  return (
    <>
      <Container>
        <DescriptionContainer data-aos="fade-up">
          <h1>About</h1>
          <DescriptionContent>
            Siemaneczko. Jestem Kinga i jestem zajebista w języki. Jestem
            nauczycielką itd. Siemaneczko. Jestem Kinga i jestem zajebista w
            języki. Jestem nauczycielką itd.
          </DescriptionContent>
        </DescriptionContainer>
        <DescriptionContainer>
          <img src={about} style={{ height: 550 }} />
        </DescriptionContainer>
      </Container>
    </>
  )
}

export default About
