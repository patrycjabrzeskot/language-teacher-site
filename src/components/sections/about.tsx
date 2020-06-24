import React from "react"
import AboutImage from "../images/about-image"
import styled from "styled-components"
//  import about from "../../images/about.jpg"
import { Container, Row, Col } from "react-bootstrap"

const Section = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
`

const DescriptionContent = styled.div`
  font-family: Lato;
  font-size: 24px;
  line-height: 32px;
  margin: 15px 0;
  max-width: 500px;
  text-align: justify;
  text-justify: inter-word;
`

const Title = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
`
const About = () => {
  return (
    <>
      <Section id="about-section">
        <Container>
          <Row>
            <Col>
              <Title>O mnie</Title>
              <DescriptionContent>
                Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl
                Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl
                Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl
                Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl
                Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl
                Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl
                Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl
                Siemaneczko. Jestem nauczycielką języków. Jestem super i wgl
              </DescriptionContent>
            </Col>
            <Col style={{ paddingLeft: 50 }}>
              <AboutImage />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
