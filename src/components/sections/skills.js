import React from "react"
import AboutImage from "../images/about-image"
import styled from "styled-components"
import about from "../../images/about.jpg"
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
const Skills = () => {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <Col>
              <img src={about} style={{ maxHeight: 550 }} />
            </Col>
            <Col style={{ paddingLeft: 50 }}>
              <Title>Umiejętności</Title>
              <DescriptionContent>
                Umiem różne rzeczy. Języki i takie tam Umiem różne rzeczy.
                Języki i takie tam Umiem różne rzeczy. Języki i takie tam Umiem
                różne rzeczy. Języki i takie tam Umiem różne rzeczy. Języki i
                takie tam Umiem różne rzeczy. Języki i takie tam Umiem różne
                rzeczy. Języki i takie tam Umiem różne rzeczy. Języki i takie
                tam Umiem różne rzeczy. Języki i takie tam Umiem różne rzeczy.
                Języki i takie tam
              </DescriptionContent>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* <Tontainer>
        <DescriptionContainer>
          <img src={about} style={{ maxHeight: 550 }} />
        </DescriptionContainer>
        <DescriptionContainer data-aos="fade-up">
          <Title>Umiejętności</Title>
          <DescriptionContent>
            Umiem różne rzeczy. Języki i takie tam Umiem różne rzeczy. Języki i
            takie tam Umiem różne rzeczy. Języki i takie tam Umiem różne rzeczy.
            Języki i takie tam Umiem różne rzeczy. Języki i takie tam Umiem
            różne rzeczy. Języki i takie tam Umiem różne rzeczy. Języki i takie
            tam Umiem różne rzeczy. Języki i takie tam Umiem różne rzeczy.
            Języki i takie tam Umiem różne rzeczy. Języki i takie tam
          </DescriptionContent>
        </DescriptionContainer>
      </Tontainer> */}
    </>
  )
}

export default Skills
