import React from 'react'
import './Footer.css'
import EternaLogo from '../../../assets/eterna logo.svg'

function Footer() {
    return (
       
        <div className="footer-container">
           <div className="ftr-cont">
               <div className="f-c">
                   <div className="logoe">

                  <img src={EternaLogo} alt="eterna-logo"/>
                   </div>
                  <div className="co">
              <div className="s1">
                   <h6>SERVICIOS</h6>
                   <p>Buscamos proyectos que logren <br/> miles de usuarios. <br/> Nuestra holding solo se enfoca en <br/>proyectos que nos lleven a vivir en un <br/> mejor futuro.</p>
              </div>
              <div className="s2">
                   <h6>SERVICIOS</h6>
                   <p>Somos programadores.<br/> Grupo de inversionistas.<br/> Lideres en búsqueda de <br/> nuevos proyectos.</p>
              </div>
              <div className="s1">
                   <h6>SERVICIOS</h6>
                   <p>5575925219 <br/> contacto@eterna.digital</p>
              </div>
              </div>
           </div>
           <div className="therms">
              <p>Términos y condiciones <br/> © 2020 Eterna</p>
           </div>
           </div>
        </div>
    ) 
}

export default Footer;