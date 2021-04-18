import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './HomeStyle.css';
import waveLf from '../assets/back 1 lights.png'
import waveR from '../assets/back 2 lights.png'
import LogoEtBco from '../assets/blancologo.svg'
import SlideShow from './components/slider/Slide.js'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const [background] = useState('#72C491')

  const headerRef = useRef(null);

  // recorre las secciones elemento por elemento 
  const revealRefs = useRef([]);
  revealRefs.current = [];



  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 1,
      backgroundColor: '#343232',
      ease: 'none',
      delay: 1,
    })
  }, [background])




  // para el toggle
  // para el desplazamiento
  useEffect(() => {
    // console.log(headerRef);
    gsap.from(headerRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
          markers: true,
        }
      })
    })
  }, [])

  // parallax
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
    gsap.utils.toArray(".parallax").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      tl.to(layer, { y: movement, ease: "none" }, 0)
    })
  }, []);

  


  // recorre elementos de un array y los separa
  const addToRefs = (el) => {
    // console.log(el)
    // comprobamos si el elemento existe en la matriz y lo agregamos
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
    // console.log(revealRefs.current)
  };



  return (
    <div className="app-container">
      <div id="hero" ref={headerRef} className="container-home">
        <div className="cont-txt layer-1 layer parallax" data-depth="2.00">
          <img src={LogoEtBco} alt="eterna" />
          <span>
          </span>
          <h1>NUESTRA MISIÓN</h1>
          <p>Queremos vivir en el mundo de Harry Potter y lo haremos<br /> gracias a la tecnología</p>
        </div>
        <div className="waves-cont"  >
          <div className="one-wave layer-2 layer parallax" data-depth="0.50">

            <img src={waveLf} alt="wave" />
          </div>
          <div className="two-wave layer-3 layer parallax" data-depth="0.80">
            <img src={waveR} alt="wave" />
          </div>
        </div>
      </div>
        <div className="slider-cont">
          <div className="slider" >
          <p>NUESTROS PRODUCTOS</p>
              <SlideShow/>
          </div>
          {/* {
            sections.map(({ title, subtitle }) => {
              return (
                <div key={title} className="app-scc" ref={addToRefs}>
                  <h2>{title}</h2>
                  <p>{subtitle}</p>
                </div>

              )
            })
          } */}
        </div>
    </div>
  )
}

export default Home;