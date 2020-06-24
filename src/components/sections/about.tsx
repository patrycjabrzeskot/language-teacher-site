import React from "react"
import SectionImage from "../images/section-image"
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
  font-size: 18px;
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
                <br />
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
              </DescriptionContent>
            </Col>
            <Col style={{ paddingLeft: 50 }}>
              <SectionImage picture="about" />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default About
