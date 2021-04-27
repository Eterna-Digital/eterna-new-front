import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Two.css'
import Particles from '../../../assets/tlegal_element.svg'
import Compu22 from '../../../assets/tlegal_img.png'
import TLegal from '../../../assets/tlegal logo.svg'


gsap.registerPlugin(ScrollTrigger);

function Two() {
    let compu22 = useRef(null);
    let text2 = useRef(null);
    const tl = gsap.timeline();

    useEffect(() => {
        tl.from(compu22, {
            x: -100,
            scrollTrigger: {
                trigger: compu22,
                start: "top-=200 center",
            end: "top-=200 top",
                scrub: 1.0
            }
        });

        tl.from(text2, {
            x: 1500,
            scrollTrigger: {
              trigger: text2,
              start: "top-=250 center",
            end: "top-=250 top",
              // markers: true,
              scrub: 1.0
            }
        } )
    })

return (
  <div className="two-container">
      <div className="two-c">
          <div className="part">
              <img src={Particles} alt="particles" />
          </div>
          <div className="computer-2" >
              <img src={Compu22} alt="computer" ref={(el) => (compu22 = el)}/> 
          </div>
          <div className="tl-container" ref={(el) => (text2 = el)}>
              <img src={TLegal} alt="tienda legal" />
              <h1>02</h1>
              <p>Gestión legal <br/> automatizada</p>
              <p>Nuestra plataforma cuenta con una <br/> inteligencia la cual es capaz de brindar una <br/> gestión legal automatizada, desde creación <br/> de contratos, almacenamiento de cada <br/> persona que ha firmado un contrato y la <br/> digitalización de firmas y machotes.</p>
              <div className="btn-card">
              <a className="btn"><span>Visitar</span><em></em></a>
              </div>
          </div>
      </div>
  </div>
)
}

export default Two;