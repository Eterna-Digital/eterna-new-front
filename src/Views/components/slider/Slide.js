import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./Slide.css";
import "react-slideshow-image/dist/styles.css";
import Lines from '../../../assets/lineas.svg'
import ReclutaLogo from '../../../assets/reclutachat logo.svg'
import Comp from '../../../assets/reclutachat_carrusel 1@2x.png'

class SlideShow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => 
       <div className="indicator">
          {i + 1}
  
          </div>
    };

    return (
      <div className="slideshow">
          <div className="btn-con">
        <button onClick={this.back} type="button">
            Go Back
          </button>
          </div>
          {/* <div className="sli-lines"> */}
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
          
              <div  className="each-slide">
                <img className="lazy"  className="sld" />
                {/* <img src={ReclutaLogo} alt="reclutachat" className="reclu-logo"/> */}
              </div>
              <div  className="each-slide">
                <img className="lazy"  className="sld" />
                {/* <img src={ReclutaLogo} alt="reclutachat" className="reclu-logo"/> */}
              </div>
              <div  className="each-slide">
                <img className="lazy"  className="sld" />
                {/* <img src={ReclutaLogo} alt="reclutachat" className="reclu-logo"/> */}
              </div>
         
          </Slide>
        </div>
          {/* </div> */}
        <div className="btn-cont">
          <img src={Lines} alt="lines" className="lines" />
          <button onClick={this.next} type="button" >
            Go Next
          </button>
          </div>
      </div>
    );
  }
}

export default SlideShow;
