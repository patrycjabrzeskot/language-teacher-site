import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import Opinion from "../opinion"

const Opinions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Container
      style={{ paddingTop: 100, paddingBottom: 100 }}
      id="opinions-section"
    >
      <Slider {...settings} style={{ paddingBottom: 25 }}>
        <div>
          <Opinion
            name="Magda S."
            picture="profile1"
            desc="My time spent with Anneli was both productive and enjoyable. She is a very good teacher and also a very pleasant person. 
            Anyone wishing to learn the Swedish language will not be disappointed with her instruction."
          />
        </div>
        <div>
          <Opinion
            name="Julia P."
            picture="profile2"
            desc="Most patient teacher ever!"
          ></Opinion>
        </div>
        <div>
          <Opinion
            name="Kamil G."
            picture="profile3"
            desc="Anneli is an excellent teacher! My lessons have followed a structured and comprehensive course
             presented in a style that is easy to follow and understand."
          ></Opinion>
        </div>
        <div>
          <Opinion
            name="Katarzyna B."
            picture="profile4"
            desc="In my experience Anneli is a natural language teacher. She is friendly enough that you feel 
your hesitations about speaking Swedish dissolve. She delivers the material in ways
 that make it very easy to assimilate."
          ></Opinion>
        </div>

        <div>
          <Opinion
            name="Tomek B."
            picture="profile5"
            desc="
            Anneli is simply fantastic. She has a natural gift for teaching and can explain what appear to be the most 
            complex things in memorable and easy to digest gems."
          ></Opinion>
        </div>
      </Slider>
    </Container>
  )
}

export default Opinions
