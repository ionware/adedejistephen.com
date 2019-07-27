import React from 'react'
import anime from 'animejs'
import { PropTypes } from 'prop-types'

export default class RotatingIconLink extends React.Component {
  componentDidMount() {
    anime({
      targets: this.node,
      rotateZ: 360,
      easing: 'linear',
      duration: 8000,
      loop: true,
    })
  }

  render() {
    const { children, to } = this.props
    return (
      <span className='circle'>
        <span className='circle__animating' ref={ref => this.node = ref}></span>
        <span className="circle__icon">
          <a href={to} target="_blank" className='circle__link'>{ children }</a>
          </span>
      </span>
    )
  }
}

RotatingIconLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
