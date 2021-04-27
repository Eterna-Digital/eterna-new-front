import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { Transition, animated, config } from 'react-spring'
// import './styles.css'

class Faces extends React.Component {
  constructor(props){
  super(props);
  this.state = { items: [] }
  }
  componentDidMount() {
    // Add 😅 🚀 🎉
    setTimeout(() => this.setState({ items: ['😅', '🚀', '🎉'] }), 0)
    // Remove 🚀
    setTimeout(() => this.setState({ items: ['😅', '🎉'] }), 2000)
    // Add ✨
    setTimeout(() => this.setState({ items: ['😅', '✨', '🎉'] }), 4000)
    // Delete all
    setTimeout(() => this.setState({ items: [] }), 6000)
    // Repeat
    setTimeout(() => this.componentDidMount(), 8000)
  }

  render() {
    return (
      <Transition
        native
        items={this.state.items}
        from={{ opacity: 0,   }}
        enter={[{ opacity: 1 }, ]}
        config={{ ...config.default, precision: 0.01 }}>
        {item => props => <animated.div style={props} className="item" children={item} />}
      </Transition>
    )
  }
}

export default Faces;