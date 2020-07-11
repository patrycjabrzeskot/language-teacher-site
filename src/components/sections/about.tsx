import React from "react"
import SectionImage from "../imageComponents/SectionImage"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const About: React.FC = () => {
  return (
    <>
      <SectionAbout id="about-section">
        <Container>
          <Row>
            <Col>
              <div
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-easing="ease"
              >
                <TitleAbout>O MNIE</TitleAbout>
                <DescriptionContentAbout>
                  Mam na imię Kinga. Moją pasją są języki. Lubię się nią dzielić
                  przez nauczanie innych. Moje motto to "Iloma językami mówisz –
                  tyle razy żyjesz".
                  <br />
                  <br />
                  Lekcje prowadzę w sposób przyjemny i bez stresu. Zawsze
                  indywidualnie podchodzę do moich uczniów, próbuję dopasować
                  sposób przedstawiania materiału tak, aby każdy wynióśł jak
                  najwięcej z każdej lekcji. <br />
                  <br />
                  Prywatnie lubię koty, herbatę i podróże - zwłaszcza do
                  skandynawii!
                </DescriptionContentAbout>
              </div>
            </Col>
            <Col style={{ paddingLeft: 50 }}>
              <SectionImage picture="about" />
            </Col>
          </Row>
        </Container>
      </SectionAbout>
    </>
  )
}

const SectionAbout = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
`

const DescriptionContentAbout = styled.div`
  font-family: Lato;
  line-height: 2vw;
  margin: 15px 0;
  max-width: 500px;
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.2vw;
`

const TitleAbout = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 1.2vw;
`

export default About
