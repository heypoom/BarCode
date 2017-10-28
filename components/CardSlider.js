import React, {Component} from 'react'
import {injectGlobal, keyframes, css} from 'emotion'
import styled from 'react-emotion'

import App from './App'
import ProfileCard from './ProfileCard'
import StandardButton from './Button'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideRight = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    margin-right: 100vw;
  }
`

const slideLeft = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    margin-right: -100vw;
  }
`

const Card = styled.div`
  animation: ${props => props.animation};
  animation-fill-mode: forwards;

  background: white;
  position: relative;
`

@App
export default class CardSlider extends Component {
  state = {
    xDown: null,
    yDown: null,
    animation: `${fadeIn} 1s ease 1`
  }

  componentDidMount() {
    if (document != undefined) {
      document.addEventListener(
        'touchstart',
        this.handleTouchStart.bind(this),
        false
      )
      document.addEventListener(
        'touchmove',
        this.handleTouchMove.bind(this),
        false
      )
    }
  }

  handleTouchStart(event) {
    this.setState({
      xDown: event.touches[0].clientX,
      yDown: event.touches[0].clientY
    })
  }

  handleTouchMove(event) {
    if (!this.state.xDown || !this.state.yDown) {
      return
    }

    let xDiff = this.state.xDown - event.touches[0].clientX,
      yDiff = this.state.yDown - event.touches[0].clientY

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        this.setState({
          //animation: `${slideRight} 0.3s ease 1`,
        })
      } else {
        this.setState({
          //animation: `${slideLeft} 0.3s ease 1`,
        })
      }
    }

    this.setState({
      xDown: null,
      yDown: null
    })
  }

  render() {
    return (
      <Card animation={this.state.animation}>
        <ProfileCard name={this.props.name} nickname={this.props.nickname} />
      </Card>
    )
  }
}
