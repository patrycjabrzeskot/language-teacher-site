import React, { Fragment } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ImageProfile from "../imageComponents/ImageProfile"
import { Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import styled from "styled-components"
import Media from "react-media"

export interface OpinionProps {
  picture: string
  name: string
  desc: string
}

const Opinion: React.FC<OpinionProps> = (props: OpinionProps) => {
  const color = "blue"
  return (
    <>
      <Container style={{ paddingLeft: 50 }}>
        <Row>
          <Col sm={2} xs={3} md={2}>
            <ImageProfile picture={props.picture} />
          </Col>
          <Col xs={1} md={1}>
            {" "}
          </Col>
          <Col sm={7} xs={7} md={7}>
            <Name>{props.name}</Name>
            <Media
              queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)",
              }}
            >
              {matches => (
                <>
                  {matches.small && (
                    <>
                      <Icon name="star" color="yellow" size="mini" />
                      <Icon name="star" color="yellow" size="mini" />
                      <Icon name="star" color="yellow" size="mini" />
                      <Icon name="star" color="yellow" size="mini" />
                      <Icon name="star" color="yellow" size="mini" />
                    </>
                  )}
                  {matches.medium && (
                    <>
                      <Icon name="star" color="yellow" size="tiny" />
                      <Icon name="star" color="yellow" size="tiny" />
                      <Icon name="star" color="yellow" size="tiny" />
                      <Icon name="star" color="yellow" size="tiny" />
                      <Icon name="star" color="yellow" size="tiny" />
                    </>
                  )}
                  {matches.large && (
                    <>
                      <Icon name="star" color="yellow" size="small" />
                      <Icon name="star" color="yellow" size="small" />
                      <Icon name="star" color="yellow" size="small" />
                      <Icon name="star" color="yellow" size="small" />
                      <Icon name="star" color="yellow" size="small" />
                    </>
                  )}
                </>
              )}
            </Media>

            <Text>{props.desc}</Text>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const Name = styled.h2`
  font-family: Lato;
  font-size: 1.2vw;
  margin-bottom: 5px;
`

const Text = styled.p`
  font-family: Lato;
  font-size: 1vw;
`
export default Opinion
