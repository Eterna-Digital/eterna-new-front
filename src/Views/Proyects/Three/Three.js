import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Three.css'
import CircleTrans from '../../../assets/circulo-trans.svg'
import Purple from '../../../assets/circle-mo.svg'
import Wunnel from '../../../assets/wunnel logo.svg'
import Compu4 from '../../../assets/wunnel img.png'

gsap.registerPlugin(ScrollTrigger);

function Three() {
    let mor = useRef(null);
    let trans = useRef(null);
    let compu33 = useRef(null);
    let text3 = useRef(null);
    const tl = gsap.timeline();

    useEffect(() => {
        tl.from(text3, {
            x: -100,
            scrollTrigger: {
                trigger: text3,
                start: "top-=300 center",
            end: "top-=200 top",
                scrub: 1.0
            }
        });

        tl.from(compu33, {
            x: 1500,
            scrollTrigger: {
              trigger: compu33,
              start: "top-=250 center",
            end: "top-=250 top",
              // markers: true,
              scrub: 1.0
            }
        } );
        tl.to(mor, {
            xPercent:5,
    ease: "none",
    scrollTrigger: {
      trigger: mor,
      scrub: 1.0
    }
        });
        tl.to(trans, {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: trans,
              scrub: 1.0
            }
        });
    })

    return (
  <div className="three-container">
      <div className="t-cont">
          <div className="circ3">
            <img src={Purple} alt="circle1" ref={(el) => (mor = el)}/>
            <img src={CircleTrans} alt="circle2" ref={(el) => (trans = el)} />
          </div>
          <div className="w-cont" ref={(el) => (text3 = el)}>
             <img src={Wunnel} alt="wunnel" />
              <h1>03</h1>
              <p>Sistema aumentado <br/>de comunicación</p>
              <p>La familia wunnel tiene diferentes <br/> automatizaciones con el objetivo de unificar <br/> la comunicación de una empresa, desde <br/> nuevas contrataciones, administración de <br/> viáticos, reembolsos a clientes, pagos <br/> simples, entre otras.</p>
              <div className="btn-card">
              <a className="btn"><span>Visitar</span><em></em></a>
              </div>
          </div>
          <div className="compu-4" ref={(el) => (compu33 = el)}>
              <img src={Compu4} alt="Compu" />
          </div>
      </div>
  </div>
    )
}
export default Three;