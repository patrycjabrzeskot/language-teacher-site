import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import Opinion from "../utilities/Opinion"

const Opinions: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    style: { paddingBottom: 25 },
  }

  return (
    <Container
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        fontFamily: "Lato",
      }}
      id="opinions-section"
    >
      <Slider {...settings}>
        <div>
          <Opinion
            name="Magda S."
            picture="profile1"
            desc="Mój czas spędzony z Kingą był produktywny, ale też przyjemny. 
            Jest bardzo dobrą nauczycielką i miłą osobą. Jeśli chcesz się nauczyć języka szwedzkiego - nie zawiedziesz się."
          />
        </div>
        <div>
          <Opinion
            name="Julia P."
            picture="profile2"
            desc="Najbardziej cierpliwa nauczycielka na świecie!"
          ></Opinion>
        </div>
        <div>
          <Opinion
            name="Kamil G."
            picture="profile3"
            desc="Kinga jest wspaniałą nauczycielką. Moje lekcje 
            to był ustrukturyzowany i kompleksowy kurs przedstawiony w sposób,
             który jest łatwy to zrozumienia"
          ></Opinion>
        </div>
        <div>
          <Opinion
            name="Katarzyna B."
            picture="profile4"
            desc="Kinga jest naturalnym nauczycielem języka. Jest tak przyjazna,
             że czujesz, że twoje opory w mówieniu po szwedzku znikają. Wykłada materiał w sposób,
              który pozwala na łatwe zrozumienie."
          ></Opinion>
        </div>

        <div>
          <Opinion
            name="Tomek B."
            picture="profile5"
            desc="Kinga jest po prostu fantastyczna. Ma naturalny talent do nauczania i potrafi 
            wytłumaczyć nawet najbardziej skomplikowane rzeczy."
          ></Opinion>
        </div>
      </Slider>
    </Container>
  )
}

export default Opinions
