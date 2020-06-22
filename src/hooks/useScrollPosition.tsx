import { useState, useEffect } from "react"

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState("home")

  useEffect(() => {
    const aboutSection = document.getElementById("about-section")
    const projectsSection = document.getElementById("projects-section")
    const contactSection = document.getElementById("contact-section")

    const padding = 200

    // const scrollHandler = () => {
    //   if (contactSection.offsetTop - padding < window.pageYOffset) {
    //     setScrollPosition("contact")
    //   } else if (projectsSection.offsetTop - padding < window.pageYOffset) {
    //     setScrollPosition("opinions")
    //   } else if (aboutSection.offsetTop - padding < window.pageYOffset) {
    //     setScrollPosition("skills")
    //   } else {
    //     setScrollPosition("about")
    //   }
    // }
    // window.addEventListener("scroll", scrollHandler)

    // return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  return scrollPosition
}
