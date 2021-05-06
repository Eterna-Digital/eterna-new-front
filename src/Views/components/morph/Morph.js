import React, {useRef, useEffect } from "react";
import  gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TweenMax } from 'gsap'
import "./Morph.css";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TweenMax)

function Morph() {
    let b1 = useRef(null);
    let b2 = useRef(null);
    let b3 = useRef(null);
    let b4 = useRef(null);
    const tl = gsap.timeline();



   useEffect(() => {
    tl.to(b1, {
        y: "-80",
        // rotation: 20, duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: b1,
            scrub: 1.5
          }

       });
       tl.to(b2, {
        y: "-200",
        rotation: -360, duration: 20,
        scrollTrigger: {
            trigger: b2,
            scrub: 1.6,
            start: "top-=300 bottom",
            end: "top-=300 top",
            toggleActions: "restart none none reset"

          } 
       });
       tl.to(b3, {
        y: "-150",
        opacity: 1,
        scrollTrigger: {
          trigger: b3,
          // markers: true,
          start: "top-=200 center",
          end: "top-=200 top",
          scrub: 1.5
        }
        
       });
       tl.from(b4, {
        // x: 100,
        rotation: -70, duration: 10,
        scrollTrigger: {
            trigger: b4,
            scrub: 2.5,
        start: "top-=350 bottom",
        end: "top-=350 top",
        toggleActions: "restart none none reset"
          } 
       });
   });



    return (
        <div className="container-morph">
          <div alt="particles1" ref={(el) => (b1 = el)} > </div>

        <div alt="particles"  ref={(el) => (b2 = el)}></div> 
            <div alt="particles"  ref={(el) => (b3 = el)}></div>
            <div alt="particles"  ref={(el) => (b4 = el)} ></div>
        </div>
    )
}

export default Morph;