import React from "react"
import Image from "../imageComponents/image"

const Welcome: React.FC = () => {
  const outer = {
    //position: "absolute",
    border: "1px solid white",
    marginTop: "5%",
    //textAlign: "center",
    color: "white",
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: 2,
    width: "60%",
    height: "50%",
    left: "20%",
    top: "15%",
  }

  const inner = {
    marginTop: "10%",
    display: "block",
    height: "50%",
  }

  return (
    <div id="welcome-section">
      <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
        <Image />
        <div style={{ ...outer, position: "absolute", textAlign: "center" }}>
          <div style={inner}>
            <span
              style={{ fontSize: 80, fontFamily: "LovedbytheKing-Regular" }}
            >
              Kinga Brzeskot{" "}
            </span>
            <br />
            <span style={{ fontSize: 26, fontFamily: "Lato" }}>
              Nauka języka szwedzkiego i norweskiego
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
