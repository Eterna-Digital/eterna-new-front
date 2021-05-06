import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import './HomeStyle.css';
import waveLf from '../../assets/back 1 lights.png'
import waveR from '../../assets/back 2 lights.png'
import LogoEtBco from '../../assets/blancologo.svg'
import SlideShow from '../components/slider/Slide.js'


gsap.registerPlugin(ScrollTrigger)



function Home() {
let txt = useRef(null);
let wave1 = useRef(null);
let slider = useRef(null);
let wave2 = useRef(null);

const tl = gsap.timeline();

useEffect(() => {
  tl.to(wave1, {
    yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: wave1,
    scrub: true
  }
  });
  tl.to(txt, {
    yPercent:30,
    ease: "none",
    scrollTrigger: {
      trigger: txt,
      scrub: true
    }
  });
  tl.to(slider, {
    yPercent: -40,
    ease: "none",
    scrollTrigger: {
      trigger: slider,
      scrub: true
    }
      })
});


  return (
    <div className="app-container">
      <div id="hero"  className="container-home">
        <div className="contTxt" ref={(el) => (txt = el)} >
          <img src={LogoEtBco} alt="eterna" />
          <span>
          </span>
          <h1>NUESTRA MISIÓN</h1>
          <p>Queremos vivir en el mundo de Harry Potter y lo haremos<br /> gracias a la tecnología</p>
        </div>
        <div className="waves-cont"  >
          <div className="one-wave" ref={(el) => (wave1 = el)}>

            <img src={waveLf} alt="wave"  />
          </div>
          <div className="two-wave" >
            <img src={waveR} alt="wave" />
          </div>
        </div>
      </div>
        <div className="slider-cont" >
          <div className="slider" ref={(el) => (slider = el)} >
          <p>NUESTROS PRODUCTOS</p>
              <SlideShow />
          </div>
        </div>
    </div>
  )
}

export default Home;