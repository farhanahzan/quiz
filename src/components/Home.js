import React, { Fragment, useState, createRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import buttonSound from '../assets/audio/button-sound.mp3';

function Home() {
  const [background, setBackground] = useState("");
let audio = new Audio('../assets/audio/button-sound.mp3');
buttonSound=createRef();
  const playButtonSound = () => {
audio.play()
};

  const styles = {
    background: background,
  };

  return (
    <Fragment>
      <Helmet>
        <title>Home - Quiz App</title>
      </Helmet>
      <div id="home">
        <section>
          <div className="container">
            <div className="card">
              <div className="circle" style={styles}>
                <h2>Quiz App</h2>
              </div>
              <div className="content">
                <div className="wrapper">
                  <p>
                    If you truly love life, don't waste time, because time is
                    what life is made of.
                  </p>
                  <span id="quato">-Bruse Lee-</span>
                </div>

                <Link
                  className="play-button"
                  to="/play/instructions"
                  style={styles}
                  onClick={playButtonSound}
                  onTouchStart={() => setBackground("#da2268")}
                  onTouchEnd={() => setBackground("#ffaf00")}
                  onMouseOver={() => setBackground("#da2268")}
                  onMouseOut={() => setBackground("#ffaf00")}

                >
                  PLAY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
      </div>
    </Fragment>
  );
}

export default Home;
