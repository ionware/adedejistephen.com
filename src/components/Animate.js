import React from 'react'
import anime from 'animejs'

export default class Animate extends React.Component {
  componentDidMount() {
    const { children, ...rest } = this.props
    anime({
      targets: children.ref.current,
      ...rest
    })
  }

  render() {
    const { children } = this.props
    return (
      <React.Fragment ref={ this.props.ref }>
        { children }
      </React.Fragment>
    )
  }
}
