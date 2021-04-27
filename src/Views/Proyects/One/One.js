import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import './One.css'

import CircleTrans from '../../../assets/circulo-trans.svg'
import Compu2 from '../../../assets/compu-s2.png'
import Reclutalogo from '../../../assets/reclutachat logo.svg'
import Ondita from '../../../assets/ondita.svg'


gsap.registerPlugin(ScrollTrigger);


function One() {
   let compu = useRef(null);
   let ondita = useRef(null);
   let divcomp2 = useRef(null);
   let morado = useRef(null);
   let ctransparent = useRef(null);
   const tl = gsap.timeline();
  

   useEffect(() => {
       tl.from(compu, {
           x: -1000,
           scrollTrigger: {
            start: "top-=200 center",
            end: "top-=200 top",
               trigger: compu,
               scrub: 1.5
           }
       });
       gsap.from(ondita, {
           x: 1500,
           scrollTrigger: {
            start: "top-=250 center",
            end: "top-=250 top",
               trigger: ondita,
               scrub: 1.5
           }
       });
        tl.to(divcomp2, {
            yPercent:40,
            ease: "none",
            scrollTrigger: {
              trigger: divcomp2,
              scrub: 1.0
            } 
        });
        tl.to(morado, {
            xPercent:30,
    ease: "none",
    scrollTrigger: {
      trigger: morado,
      scrub: 1.0
    }
        });
        tl.to(ctransparent, {
            xPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: ctransparent,
              scrub: 1.0
            }
        });

        

    

   })

return(
    <div className="one-container"   >
       <div className="cont-p" >
            <div className="div-comp1">
                <div >
               <img src={Compu2} alt="compu" ref={(el) => (compu = el)}/>

                </div>
            </div>
            <div className="divcomp2" ref={(el) => (divcomp2 = el)} >
                <img src={CircleTrans} alt="transparent" />
            </div>
            <div className="div-comp3">
              <img src={Reclutalogo} alt="reclutachat" />
              <h1>01</h1>
              <p>Inteligencia, <br/> automatizaciones <br/> & data para <br/> contrataciones</p>
              <p>Reclutachat arranca con un concepto <br/> para generar base de datos de personal <br/> y búsqueda de talento masivo para <br/> grandes empresas, análisis de rotación <br/> y predicciones psicométricas.</p>
              <div className="btn-card">
              <a className="btn"><span>Visitar</span><em></em></a>
              </div>
            </div>
            <div className="div-comp4">
                <h5>Reclutachat cuenta con: </h5>
                <ul>
                    <li><span>-</span><p>Inteligencia para chatbots</p></li>
                    <li><span>-</span><p>Conversaciones automáticas</p></li>
                    <li><span>-</span><p>Generación de base de datos</p></li>
                    <li><span>-</span><p>Predicción de rotación</p></li>
                    <li><span>-</span><p>Predicción de accidents</p></li>
                    <li><span>-</span><p>Capacitaciones digitales, en VR, y    gameficadas</p></li>
                    <li><span>-</span><p>Automatización en fechas para los reclutadores </p></li>
                    <li><span>-</span><p>Comunicación previa, durante y posterior a las campañas</p></li>
                    
                <div className="ondita-cont">
                  <img src={Ondita} alt="ondita" ref={(el) => (ondita = el)}/>
                </div>
                </ul>
            </div>
            <div className="div-comp5 " >
                <div className="morado" ref={(el) => (morado = el)} />
                <img src={CircleTrans} alt="transparent" ref={(el) => (ctransparent = el)} />

            </div>
       </div>
    </div>
)

}
export default One;
