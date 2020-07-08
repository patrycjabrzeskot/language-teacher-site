import { useEffect, useState, useRef } from "react"

const useMenuColor = () => {
  const [navBackground, setNavBackground] = useState(false)
  let navRef = useRef<boolean>()
  navRef.current = navBackground

  useEffect(() => {
    const section: HTMLElement | null = document.getElementById(
      "welcome-section"
    )
    const handleScroll = () => {
      if (section) {
        const sectionSize = section.offsetHeight

        let show = document.body.scrollTop > sectionSize - 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
    }

    document.body.addEventListener("scroll", handleScroll)
    return () => {
      document.body.removeEventListener("scroll", handleScroll)
    }
  }, [setNavBackground, document.body.scrollTop])

  return navBackground
}

export default useMenuColor
