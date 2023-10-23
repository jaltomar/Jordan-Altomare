import React, { useState } from "react";
import useSound from "use-sound";

import Button from "react-bootstrap/Button";
import platesomeLogo from "./images/platesome7.png";
import duck from "./images/duck.png";
import jordan from "./images/jordan_pic.png";
import quikwiz from "./images/quikwizlogo6.png";
import tinyMiracle from "./images/tinyMiracle6.png";
import ezLearn from "./images/ezLearnLogo6.png";

import duckSound from "./sounds/duckSound.mp3";

export default function Home() {
  const [duckClickCount, setDuckClickCount] = useState(0);
  const [hoverBox, setHoverBox] = useState(-1);

  const [playSound] = useSound(duckSound);

  return (
    <>
      <div className="d-flex header">
        <h2 className="me-auto align-self-center mb-0">Jordan Altomare</h2>

        <a className="custom-link align-self-center" href="asdf">
          GitHub
        </a>
        <a className="custom-link align-self-center" href="asdf">
          LinkedIn
        </a>
      </div>

      <div className="d-flex p-4" style={{ columnGap: "1rem" }}>
        <img alt="Jordan's photo" width="25%" src={jordan}></img>

        <div>
          <h3>Who am I?</h3>
          <p style={{ textAlign: "left" }}>
            Some say I'm a myth. Others say I'm a ghost. In reality, I'm just a
            man who inaccurately recalls other people's descriptions of me.
          </p>
          <p style={{ textAlign: "left" }}>
            I obtained my B.S. in Computer Science from University of Rochester.
            I have a passion for creating websites that feel as nice as they
            look. I also enjoy doing mobile app development. Coding is the most
            fun for me when I get to have some creative influence on the
            outcome.
          </p>
          <p style={{ textAlign: "left" }}>
            Outside of coding, I enjoy exercising, playing guitar, and listening
            to The Beatles. Have you given them a listen? They're fantastic:{" "}
            <a
              href="https://www.youtube.com/watch?v=NCtzkaL2t_Y"
              target="_blank"
            >
              Don't Let Me Down
            </a>
            .
          </p>
        </div>
      </div>
      <h3>My Creations</h3>
      <div className="p-4">
        <div className="d-flex" style={{ border: "red solid 0px" }}>
          <div className="rotating container" style={{ width: "50%" }}>
            <img
              style={{ marginLeft: "-20px", marginRight: "20px" }}
              alt="Tiny Miracles Rescue logo"
              width="50%"
              src={tinyMiracle}
            />
            <div>
              <h3>Tiny Miracles</h3>
              <p className="visible-text">
                Quikwiz is a fun trivia game created with React. Users are asked
                old questions from the show Jeopardy! See how many questions you
                can get correct!
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              setHoverBox(2);
            }}
            className="rotating container"
            style={{ width: "50%" }}
          >
            <img alt="Platesome logo" width="50%" src={platesomeLogo} />
            <div>
              <h3>Platesome</h3>
              <p className="visible-text">
                Quikwiz is a fun trivia game created with React. Users are asked
                old questions from the show Jeopardy! See how many questions you
                can get correct!
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex" style={{ border: "red solid 0px" }}>
          <div className="rotating container" style={{ width: "50%" }}>
            <img alt="EZLearn GuitAR logo" width="50%" src={ezLearn} />
            <div>
              <h3>EZLearn GuitAR</h3>
              <p className="visible-text">
                Quikwiz is a fun trivia game created with React. Users are asked
                old questions from the show Jeopardy! See how many questions you
                can get correct!
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              setHoverBox(1);
            }}
            onMouseLeave={() => {
              // setHoverBox(-1);
            }}
            className="rotating container"
            style={{ width: "50%" }}
          >
            <img alt="Quikwiz logo" width="50%" src={quikwiz} />
            <div>
              <h3>Quikwiz</h3>
              {hoverBox > -3 && (
                <p className="visible-text">
                  Quikwiz is a fun trivia game created with React. Users are
                  asked old questions from the show Jeopardy! See how many
                  questions you can get correct!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ border: "red solid 0px" }} className="me-auto">
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

      <div class="rotating-image"></div>

      {/* <div className="d-flex">
        <a href="asdf" className="logo">
          <img src={platesomeLogo} />
        </a>
      </div> */}
    </>
  );
}
