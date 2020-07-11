import React from "react"
import SectionImage from "../imageComponents/SectionImage"
import { Container, Row, Col } from "react-bootstrap"

const About: React.FC = () => {
  return (
    <>
      <div style={section} id="about-section">
        <Container>
          <Row>
            <Col>
              <div
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-easing="ease"
              >
                <h1 style={title}>O MNIE</h1>
                <div style={descriptionContent}>
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
                </div>
              </div>
            </Col>
            <Col style={{ paddingLeft: 50 }}>
              <SectionImage picture="about" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

const section = {
  display: "flex",
  paddingTop: 100,
  paddingBottom: 100,
}

const descriptionContent = {
  fontFamily: "Lato",
  lineHeight: 2,
  margin: 15,
  maxWidth: 500,
  fontSize: 18,
}

const title = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: 18,
}

export default About
