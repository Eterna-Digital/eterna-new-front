import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger }from 'gsap/ScrollTrigger' 
import './HomeStyle.css';

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    title: 'uno',
    subtitle: 'sub uno'
  },
  {
    title: 'dos',
    subtitle: 'sub dos'
  },
  {
    title: 'tres',
    subtitle: 'sub tres'
  }
];
function Pruebas(){
  const [background, setBackground] = useState('#72C491')

  const headerRef = useRef(null);

  // recorre las secciones elemento por elemento 
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const toggleBackground = () => {
    const color = background !== '#72C491' ? '#72C491' : '#6DCDEB'
    setBackground(color)
  };

  // aparece background con delay
  useEffect(() => {
    gsap.to(headerRef.current, { 
      duration: 1, 
      backgroundColor: background,
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
    })

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el,{
        autoAlpha: 0
      }, {
        duration:1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
          markers: true,
        }
      })
    })
  }, [])



  // recorre elementos de un array y los separa
  const addToRefs = (el) => {
    // console.log(el)
    // comprobamos si el elemento existe en la matriz y lo agregamos
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
    // console.log(revealRefs.current)
  };



  return (
    <div>
    <header ref={headerRef} className="container-home">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>logo</p>
    <button onClick={() => toggleBackground()}>toggle color</button>
   
  </header>
  <main className="bc">
  {/* <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a> */}
    {
      sections.map(({title, subtitle}) => {
        return (
          <div key={title} className="app-scc" ref={addToRefs}>
           <h2>{title}</h2>
           <p>{subtitle}</p>
          </div>
          
        )
      })
    }
  </main>
  </div>
  )
}

export default Pruebas