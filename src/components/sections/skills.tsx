import React from "react"
import SectionImage from "../images/section-image"
import styled from "styled-components"
// import about from "../../images/about.jpg"
import { Container, Row, Col } from "react-bootstrap"

const Section = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
`

const DescriptionContent = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
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
`
const Skills = () => {
  return (
    <>
      <Section id="skills-section">
        <Container>
          <Row>
            <Col>
              <SectionImage picture="skills" />
            </Col>
            <Col style={{ paddingLeft: 50 }}>
              <Title>UMIEJĘTNOŚCI</Title>
              <DescriptionContent
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-easing="ease"
              >
                <br />
                Uczę szwedzkiego i norweskiego. <br />W 2019 roku ukończyłam
                studia na Uniwersytecie Śląskim na kierunku Germanistyka,
                specjalności - Język szwedzki. Obecnie dalej studiuję na
                Uniwersytecie Poznańskim kierunek Filologia szwedzka.
                <br /> Oprócz studiów z języka szwedzkiego, na koncie mam
                certyfikat Bergentest, potwierdzający umiejętności języka
                norweskiego. <br />
                <br />
                Uczę dzieci i dorosłych. Indywidualnie lub w grupie. Od podstaw
                lub poziom zaawansowany. Prowadzę "rozmówki". Do wybory do
                koloru. Jeśli masz pytania lub pomysły napisz do mnie.
                <br /> Lekcje indywidualne nauczam osobiście lub online - w
                zależności od odległości lub preferencji ucznia.
              </DescriptionContent>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Skills
