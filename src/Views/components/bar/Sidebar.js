import React from 'react'
import './Sidebar.css'
import DateApi from './DateApi'
import LogoEterna from '../../../assets/eterna logo.svg'
import Caritas from '../../../assets/caritas.svg'
import Facebook from '../../../assets/facebook.svg'
import Linkedin from '../../../assets/linkedin.svg'


function Sidebar(){
    return(
        <div className="cont-sidebar">
            <div className="cont-s">
                <figure>
                    <img src={LogoEterna} alt="logo"/>
                </figure>
                <div className="side-elements">
                    <DateApi />
                    <div className="face-cont">
                      <img src={Caritas} alt="caritas"/>
                    </div>
                    <div className="socialm-cont">
                      <img src={Facebook} alt="facebook"/>
                      <img src={Linkedin} alt="linkedIn"/>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Sidebar;