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
let title = useRef(null);
let line = useRef(null);
let logo = useRef(null);
let txtHome = useRef(null);

const tl = gsap.timeline();
const tlContent = gsap.timeline();

useEffect(() => {
  tlContent
  // .from(wave1, {
  //   duration: 1.5 ,
  //     x: "-80",
  //     scrub: 1.5,
  //     ease: "power1.out",
  // })
  
  .from(line, {
    scaleX: 0, transformOrigin: "left center",
    // opacity: 0,
    // x: 60,
    // scrub: 4.0,
    duration: 0.6,
    scrub: 1.5,
    // ease: "power1.out",
    // duration: 1,
  })
  tlContent.from(logo, {
    opacity: 0,
    duration: 0.6,
    y: 20,
    scrub: 5,
    ease: "power1.out",
  })
  
  .from(title, {
    opacity: 0,
    duration: 0.5,
    y: "-30",
    scrub: 5,
    // x: 60,
    // scrub: 1.5
  })
  .from(txtHome, {
    opacity: 0,
    duration: 0.5 ,
    x: "30",
    scrub: 1.5,
    ease: "power1.out",
} )
.from(wave2, {
  duration: 1.5 ,
    y: "10",
    scrub: 1.5,
    ease: "power1.out",
})







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
      <div id="hero"  className="container-home" >
        <div className="cont-cont" ref={(el) => (txt = el)}>
          <div className="contTxt"  >
            <img src={LogoEtBco} alt="eterna"  ref={(el) => (logo = el)} />
            <span  ref={(el) => (line = el)}>
            </span>
            
            <h1  ref={(el) => (title = el)}>NUESTRA MISIÓN</h1>
            <p ref={(el) => (txtHome = el)}>Queremos vivir en el mundo de Harry Potter y lo haremos<br /> gracias a la tecnología</p>
          </div>
        </div>
        <div className="waves-cont"  >
          <div className="one-wave" ref={(el) => (wave1 = el)}>

            <img src={waveLf} alt="wave"  />
          </div>
          <div className="two-wave" ref={(el) => (wave2 = el)}>
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