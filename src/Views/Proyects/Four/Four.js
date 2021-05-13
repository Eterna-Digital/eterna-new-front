import React from 'react'
import './Four.css'
import CbDaze from '../../../assets/cb daze logo.svg'
import WeCoin from '../../../assets/we coin logo.svg'
import UtaG from '../../../assets/utag plus logo.svg'


function Four() {
  return (
    <div className="four-container">
      <div className="f-cont">
        <h4>PRÓXIMAMENTE</h4>
        <div className="container">
          <div className="card1">
            <div className="box">
              <div className="content">
                <img src={CbDaze} alt="CBDaze" />
                <p>Plataforma de e-commerce <br /> con venta de productos de <br />
              alta calidad de CBD, <br /> estrenando una nueva forma <br />de vender en México, brindar
              <br /> un gran servicio, y llenar de <br />alegría al mundo.</p>

              </div>
            </div>
          </div>
          <div className="card1">
            <div className="box">
              <div className="content">
                <img src={WeCoin} alt="WeCoin" />
                <p>Tenemos un chat con más <br /> de 5,000 usuarios, el chat se <br />
              convertirá en un modelo de <br /> pagos, administración y <br /> creación de proyectos.</p>

              </div>
            </div>
          </div>
          <div className="card1">
            <div className="box">
              <div className="content">
                <img src={UtaG} alt="Utag Plus" />
                <p>Agencia de tecnología para <br /> marketing ahora en México. <br /> Nos fusionamos <br />
              para brindar el mejor servicio a nuestros clientes.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Four;