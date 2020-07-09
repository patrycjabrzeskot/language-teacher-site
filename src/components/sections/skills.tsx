import React from "react"
import SectionImage from "../imageComponents/SectionImage"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const Skills: React.FC = () => {
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
              </DescriptionContent>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
`

const DescriptionContent = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  line-height: 2vw;
  margin: 15px 0;
  max-width: 500px;
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.1vw;
`

const Title = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 1.2vw;
`

export default Skills
