import React from "react"
import SectionImage from "../imageComponents/SectionImage"
import { Container, Row, Col } from "react-bootstrap"

const Skills: React.FC = () => {
  return (
    <>
      <div style={section} id="skills-section">
        <Container>
          <Row>
            <Col>
              <SectionImage picture="skills" />
            </Col>
            <Col style={{ paddingLeft: 50 }}>
              <h1 style={title}>UMIEJĘTNOŚCI</h1>
              <div
                style={descriptionContent}
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-easing="ease"
              >
                W 2019 roku ukończyłam studia na Uniwersytecie Śląskim na
                kierunku Germanistyka, specjalności - Język szwedzki. Obecnie
                studiuję na Uniwersytecie Poznańskim kierunek Filologia
                szwedzka.
                <br /> Oprócz studiów z języka szwedzkiego, na koncie mam
                certyfikat Bergentest, potwierdzający umiejętności języka
                norweskiego. <br />
                <br />
                Uczę dzieci i dorosłych. Indywidualnie lub w grupie. Od podstaw
                lub poziom zaawansowany. Prowadzę "rozmówki". Jeśli masz pytania
                lub pomysły napisz do mnie.
                <br /> Lekcje indywidualne nauczam osobiście lub online.
              </div>
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

export default Skills
