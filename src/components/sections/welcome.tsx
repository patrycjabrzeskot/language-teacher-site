import React from "react"
import Image from "../images/image"
import styled from "styled-components"

const LayeredBox = styled.div``

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`
const Inner = styled.div`
  position: absolute;
  border: 1px solid white;
  margin-top: 50px;
  text-align: center;
  color: white;
  display: inline-block;
  vertical-align: middle;
  line-height: 100px;
  width: 60%;
  height: 50%;
  left: 20%;
  top: 15%;
`
const Name = styled.span`
  font-size: 90px;
  font-family: LovedbytheKing-Regular;
`
const Text = styled.span`
  font-size: 30px;
  font-family: Lato;
`

const Welcome = () => {
  return (
    <div id="welcome-section">
      <Container>
        <Image />
        <Inner>
          <br />
          <Name>Kinga Brzeskot</Name>
          <br />
          <Text>Nauka języka szwedzkiego i norweskiego</Text>
        </Inner>
      </Container>
    </div>
  )
}

export default Welcome
