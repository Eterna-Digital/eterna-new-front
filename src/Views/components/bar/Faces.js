import React, { useEffect } from "react";
import gsap from "gsap";
import "./Faces.css";
import blink from '../../../assets/svg caritas/blink.svg';
import blush from '../../../assets/svg caritas/blush.svg';
import cool from '../../../assets/svg caritas/cool.svg';
import cute from '../../../assets/svg caritas/cute.svg';
import happy1 from '../../../assets/svg caritas/happy-1.svg';
import happy from '../../../assets/svg caritas/happy.svg';
import laugh from '../../../assets/svg caritas/laugh.svg';
import relief from '../../../assets/svg caritas/relief.svg';
import surprise from '../../../assets/svg caritas/surprise.svg';

const Faces = () => {
 
  return (
    <div className="contai">
       <div className="cont-c">
         <img src={blink} alt="blink" />
         <img src={blush} alt="blush" />
         <img src={cool} alt="cool" />
         <img src={cute} alt="cute" />
       </div>
    </div>
  );
};

export default Faces;


// class Faces extends React.Component {
//   constructor(props){
//   super(props);
//   this.state = { items: [] }
//   }
//   componentDidMount() {
//     // Add 😅 🚀 🎉
//     setTimeout(() => this.setState({ items: ['😅', '🚀', '🎉'] }), 0)
//     // Remove 🚀
//     setTimeout(() => this.setState({ items: ['😅', '🎉'] }), 2000)
//     // Add ✨
//     setTimeout(() => this.setState({ items: ['😅', '✨', '🎉'] }), 4000)
//     // Delete all
//     setTimeout(() => this.setState({ items: [] }), 6000)
//     // Repeat
//     setTimeout(() => this.componentDidMount(), 8000)
//   }

//   render() {
//     return (
//       <Transition
//         native
//         items={this.state.items}
//         from={{ opacity: 0,   }}
//         enter={[{ opacity: 1 }, ]}
//         config={{ ...config.default, precision: 0.01 }}>
//         {item => props => <animated.div style={props} className="item" children={item} />}
//       </Transition>
//     )
//   }
// }

// export default Faces;