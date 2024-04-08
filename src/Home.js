import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import platesomeLogo from "./images/platesome7.png";
import duck from "./images/duck_2.png";
import jordan from "./images/jordan_pic.png";
import quikwiz from "./images/quikwizlogo6.png";
import tinyMiracle from "./images/tinyMiracle6.png";
import ezLearn from "./images/ezLearnLogo6.png";

import duckSound from "./sounds/duckSound.mp3";
import Cell from "./Cell";
import NavBar from "./NavBar";

export default function Home() {
  const [duckClickCount, setDuckClickCount] = useState(0);
  const [hoverBox, setHoverBox] = useState(-1);

  const [playSound] = useSound(duckSound);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <>
      <NavBar />

      <div className="p-4">
        <div className="d-flex biography-div" style={{ columnGap: "1rem" }}>
          <div className="photo-div">
            <img
              width="100%"
              style={{ borderRadius: "1rem" }}
              alt="Jordan's photo"
              src={jordan}
            ></img>
          </div>
          <div className="bio-text-div">
            <h2>
              <b>Who am I?</b>
            </h2>
            <div className="bio-text-div-p">
              <p style={{ textAlign: "left" }}>
                Some say I'm a myth. Others say I'm a ghost. In reality, I'm
                just a man who inaccurately recalls other people's descriptions
                of me.
              </p>
              <p style={{ textAlign: "left" }}>
                I obtained my B.S. in Computer Science from University of
                Rochester. I have a passion for creating websites that feel as
                nice as they look. I also enjoy doing mobile app development.
                Coding is the most fun for me when I get to have some creative
                influence on the outcome.
              </p>
              <p style={{ textAlign: "left" }}>
                Outside of coding, I enjoy exercising, playing guitar, and
                listening to The Beatles. Have you given them a listen? They're
                fantastic:{" "}
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
        </div>
      </div>

      <div style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}>
        <h2 className="mb-4">
          <b>My Creations</b>
        </h2>

        <div className="me-grid">
          <Cell
            link="https://tinymiraclespcr.org/"
            imgSrc={tinyMiracle}
            title="Tiny Miracles"
            altText="Tiny Miracles Rescue logo"
            description="This is a React website created for use by a non-profit animal
            rescue, Tiny Miracles Rescue. Users can apply to adopt a furry
            friend. Firebase is used for storage."
          />
          <Cell
            link="https://platesome.com/"
            imgSrc={platesomeLogo}
            title="Platesome"
            altText="Platesome logo"
            description="Platesome is a nutrition tracking website created with
           React. Users can login and track their healthy food choices.
           Data is stored through Firebase."
          />
          <Cell
            link="https://abdelk7344.github.io/ezlearnguitar/"
            imgSrc={ezLearn}
            title="EZLearn GuitAR"
            titleClass={"ez-learn"}
            altText="EZLearn GuitAR logo"
            description="EZLearn GuitAR is an iOS AR application that helps people
            learn to play guitar. AR markers are displayed on the neck
            of the guitar to show you where to put your fingers."
          />
          <Cell
            link="https://quikwiz.com/"
            imgSrc={quikwiz}
            title="Quikwiz"
            altText="Quikwiz logo"
            description="Quikwiz is a fun trivia game created with React. Users are
            asked old questions from the show Jeopardy! See how many
            questions you can get correct!"
          />
        </div>
      </div>

      <div className="mt-4">
        {(duckClickCount === 0 || duckClickCount > 4) && (
          <p style={{ visibility: "hidden", margin: "0" }}>Hidden duck text </p>
        )}

        {duckClickCount === 1 && (
          <p className="typewriter"> It appears to be a duck...</p>
        )}

        {duckClickCount === 2 && (
          <p className="typewriter">
            Maybe if you click it again it will quack...
          </p>
        )}
        {duckClickCount === 3 && (
          <p className="typewriter">Hmmm... One more time perhaps?</p>
        )}

        {duckClickCount === 4 && <p className="typewriter">Amazing!</p>}
      </div>

      <div className="me-auto duck-div">
        <div className="background-image"></div>
        <div className="sky"></div>

        <img
          onClick={() => {
            setDuckClickCount(duckClickCount + 1);
            if (duckClickCount > 2) {
              playSound();
            }
          }}
          className="clickable"
          src={duck}
        ></img>
      </div>
      <div className="purple-fade">
        <img className="fake-duck" src={duck} />
      </div>
    </>
  );
}
