import React from 'react' 
import './Sidebar.css'
import DateApi from './DateApi'
import LogoEterna from '../../../assets/eterna logo.svg'
import Faces from './Faces.js'
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
                      <Faces />
                    </div>
                    <div className="socialm-cont">
                      {/* <img src={Facebook} alt="facebook"/> */}
                      <a href="https://www.linkedin.com/company/eterna-digital" target="_blank"><img src={Linkedin} alt="linkedIn"/></a>
                    </div>
                </div>
            </div>
           
        </div>
    )
    
}

export default Sidebar;