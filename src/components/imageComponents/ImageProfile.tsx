import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export interface ImageProps {
  picture: string
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const ImageProfile = (props: ImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      profile1: file(relativePath: { eq: "profile1.jpg" }) {
        ...squareImage
      }
      profile2: file(relativePath: { eq: "profile2.jpg" }) {
        ...squareImage
      }
      profile3: file(relativePath: { eq: "profile3.jpg" }) {
        ...squareImage
      }
      profile4: file(relativePath: { eq: "profile4.jpg" }) {
        ...squareImage
      }
      profile5: file(relativePath: { eq: "profile5.jpg" }) {
        ...squareImage
      }
    }
  `)

  return <Img fixed={data[props.picture].childImageSharp.fixed} />
}

export default ImageProfile
