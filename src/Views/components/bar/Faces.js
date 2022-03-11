import React, { useEffect } from "react";
import gsap from "gsap";
import "./Faces.css";
import blink from "../../../assets/svg caritas/blink.svg";
import blush from "../../../assets/svg caritas/blush.svg";
import cool from "../../../assets/svg caritas/cool.svg";
import cute from "../../../assets/svg caritas/cute.svg";

import happy from "../../../assets/svg caritas/happy.svg";
import laugh from "../../../assets/svg caritas/laugh.svg";
import relief from "../../../assets/svg caritas/relief.svg";
import surprise from "../../../assets/svg caritas/surprise.svg";

const Faces = () => {
  useEffect(() => {
    for (let i = 1; i <= 4; i++) {
      const tl = gsap.timeline({ repeat: -1, delay: i * -4 });
      const face = `#face-${i}`;
      tl.fromTo(
        `${face}-1`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
        .to(
          `${face}-1`,
          {
            opacity: 0,
          },
          "+=2"
        )
        .fromTo(
          `${face}-2`,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .to(
          `${face}-2`,
          {
            opacity: 0,
          },
          "+=3"
        );
    }
  });

  return (
    <div className="contai">
      <div className="cont-c">
        <div className="face" id="face-1">
          <img src={blink} alt="blink" id="face-1-1" />
          <img src={blush} alt="blush" id="face-2-1" />
        </div>
        <div className="face" id="face-2">
          <img src={cute} alt="cute" id="face-4-1" />
          <img src={surprise} alt="surprise" id="face-1-2" />
        </div>
        <div className="face" id="face-3">
          <img src={cool} alt="cool" id="face-3-1" />
          <img src={happy} alt="happy" id="face-2-2" />
        </div>
        <div className="face" id="face-4">
          <img src={relief} alt="relief" id="face-4-2" />
          <img src={laugh} alt="laugh" id="face-3-2" />
        </div>
      </div>
      <span></span>
    </div>
  );
};

export default Faces;
