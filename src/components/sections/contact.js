import React from "react"
import styled from "styled-components"

const Container = styled.div`
  ${"" /* ${"" /* min-height: 400px; */} */}
  line-height: 100px;
  text-align: center;
  padding: 50px;
  margin-left: 100px;
  margin-right: 100px;
`

const Inner = styled.div`
  ${"" /* ${"" /* min-height: 400px; */} */}
  line-height: 100px;
  text-align: center;
  border: 1px solid #000;
  padding: 50px;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-size: 25px;
  max-width: 50%;
`

const Contact = () => {
  return (
    <>
      <Container>
        <Inner>
          <Text>
            kontakt.kingabrzeskot@gmail.com
            <br />
          </Text>
        </Inner>
      </Container>
    </>
  )
}

export default Contact
