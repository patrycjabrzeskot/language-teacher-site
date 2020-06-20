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
const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
`
const About = props => {
  console.log(props)
  return (
    <>
      <Container>
        <DescriptionContainer data-aos="fade-up">
          <Title>{props.title}</Title>
          <DescriptionContent>{props.description}</DescriptionContent>
        </DescriptionContainer>
        <DescriptionContainer>
          <img src={about} style={{ maxHeight: 550 }} />
        </DescriptionContainer>
      </Container>
    </>
  )
}

export default About
