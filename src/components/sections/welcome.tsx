import React from "react"
import Image from "../images/image"
import styled from "styled-components"

const LayeredBox = styled.div`
  position: absolute;
  margin-top: 200px;
  margin-left: 150px;
  background-color: rgba(255, 255, 255, 0.1);
  top: 0;
  width: 33%;
  min-width: 250px;
  min-height: 200px;
`

const Text = styled.p``

const Welcome = () => {
  return (
    <div>
      <Image></Image>

      {/* <LayeredBox>
        <Text>Some text</Text>
      </LayeredBox> */}
    </div>
  )
}

export default Welcome