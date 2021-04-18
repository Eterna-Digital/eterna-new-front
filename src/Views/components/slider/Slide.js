import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./Slide.css";
import "react-slideshow-image/dist/styles.css";
import Lines from '../../../assets/lineas.svg'
import Comp from '../../../assets/reclutachat_carrusel 1@2x.png'
import Right from '../../../assets/right-arrow.svg'
import Left from '../../../assets/left-arrow.svg'

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
      transitionDuration: 300,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) =>
        <div className="indicator">
         {i + 0}


        </div>
    };

    return (

      <div className="slideshow">

        <div className="btn-cont">
          <button onClick={this.back} type="button" >
          <img src={Left} alt="left" className="icn"/>
          </button>
        </div>
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>

            <div className="each-slide">
              <img src={Comp} alt="compu1" className="sld" />
            </div>
            <div className="each-slide">
              <img src={Comp} alt="compu2" className="sld" />
            </div>
            <div className="each-slide">
              <img src={Comp} alt="compu3" className="sld" />
            </div>

          </Slide>
        </div>
        <div className="btn-cont">
          <img src={Lines} alt="lines" className="lines" />
          <button onClick={this.next} type="button" >
            <img src={Right} alt="right" className="icn"/>
          </button>
        </div>
      </div>

    );
  }
}

export default SlideShow;
