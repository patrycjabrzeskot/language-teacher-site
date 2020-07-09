import React from "react"
import Image from "../imageComponents/image"
import styled from "styled-components"

const Welcome: React.FC = () => {
  return (
    <div id="welcome-section">
      <Container>
        <Image />
        <Outer>
          <Inner>
            <Name>Kinga Brzeskot </Name>
            <br />
            <Text>Nauka języka szwedzkiego i norweskiego</Text>
          </Inner>
        </Outer>
      </Container>
    </div>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`
const Outer = styled.div`
  position: absolute;
  border: 1px solid white;
  margin-top: 5%;
  text-align: center;
  color: white;
  display: inline-block;
  vertical-align: middle;
  line-height: 5vw;
  width: 60%;
  height: 50%;
  left: 20%;
  top: 15%;
`

const Inner = styled.div`
  margin-top: 10%;
  display: block;
  height: 50%;
`

const Name = styled.span`
  font-size: 6vw;
  font-family: LovedbytheKing-Regular;
`
const Text = styled.span`
  font-size: 2vw;
  font-family: Lato;
`

export default Welcome
