import React, { useState } from "react";
import useSound from "use-sound";

import Button from "react-bootstrap/Button";
import platesomeLogo from "./images/logo_platesome.png";
import duck from "./images/duck.png";
import duckSound from "./sounds/duckSound.mp3";

export default function Home() {
  const [duckClickCount, setDuckClickCount] = useState(0);
  const [playSound] = useSound(duckSound);

  return (
    <>
      <div
        className="d-flex"
        style={{ columnGap: "1rem", padding: ".5rem 1.5rem .5rem 1.5rem" }}
      >
        <h2 className="me-auto align-self-center mb-0">Jordan Altomare</h2>

        <a
          className="custom-link align-self-center"
          style={{ display: "inline-block mt-4" }}
          href="asdf"
        >
          GitHub
        </a>
        <a className="custom-link align-self-center" href="asdf">
          LinkedIn
        </a>
      </div>

      <div className="d-flex p-4" style={{ columnGap: "1rem" }}>
        <span>image</span>

        <div>
          <h3>Who am I?</h3>
          <p>loeiajfiaoj fdjiao fjdiao pjfdiao pjdifop ajiop ajfidoap j</p>
        </div>

        <span>imageTExt</span>

        <div style={{ border: "red solid 2px" }} className="ms-auto">
          <img
            onClick={() => {
              setDuckClickCount(duckClickCount + 1);
              if (duckClickCount > 2) {
                playSound();
              }
            }}
            className="clickable"
            width="30%"
            src={duck}
          ></img>

          {duckClickCount > 0 && (
            <p className="typewriter"> It appears to be a duck...</p>
          )}

          {duckClickCount > 1 && (
            <p className="typewriter">
              Maybe if you click it again it will quack...
            </p>
          )}
          {duckClickCount > 2 && (
            <p className="typewriter">Hmmm... One more time perhaps?</p>
          )}

          {duckClickCount > 3 && <p className="typewriter">Amazing!</p>}
        </div>
      </div>
      <div class="rotating-image"></div>

      {/* <div className="d-flex">
        <a href="asdf" className="logo">
          <img src={platesomeLogo} />
        </a>
      </div> */}
    </>
  );
}
