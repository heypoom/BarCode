import React, {Component} from 'react'
import styled, {injectGlobal, keyframes} from 'react-emotion'

import Button from './Button'

injectGlobal`
  body {
    margin: 0;
    background: url(https://kazzkiq.github.io/CodeFlask.js/img/bg-main_2x.png) #3d3a4e;
  }
`

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

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 1s ease 1;
`

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: calc(100vw - 20px);
  background: white;
  border-radius: 7px;
  height: calc(100vh - 20px);
  margin-top: 10px;
  overflow: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const Padding = styled.div`
  padding: 20px;
`

const UsernameLabel = styled.h1`
  width: 100%;
  margin: 15px 0;
  margin-bottom: 25px;
  font-family: sans-serif;
  text-align: center;
`

const ImageProfile = styled.div`
  width: 100px;
  height: 100px;
  margin: auto auto;
  border-radius: 50%;
  background: url(${props => props.img}) center center;
  background-size: 100px 100px;
`
const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  background: #fafafa;
  border-top: 1px solid #ccc;
`

const Description = styled.div`
  font-family: sans-serif;
  text-align: center;
  font-size: 1.3em;
  color: #666
  padding: 15px;
`

class CardSlider extends Component {
  constructor() {
    super()
    this.state = {
      xDown: null,
      yDown: null,
    }
  }
  componentDidMount() {
    if (document != undefined) {
      document.addEventListener('touchstart', this.handleTouchStart.bind(this), false)
      document.addEventListener('touchmove', this.handleTouchMove.bind(this), false)
    }
  }
  handleTouchStart(event) {
    this.setState({
      xDown: event.touches[0].clientX,
      yDown: event.touches[0].clientY,
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
        console.log('You swipe left')
      } else {
        console.log('You swipe rightj')
      }
    }

    this.setState({
      xDown: null,
      yDown: null,
    })
  }
  render() {
    return (
      <FlexContainer>
        <Container>
          <Padding>
            <UsernameLabel>Chun Rapeepat</UsernameLabel>
            <ImageProfile img='https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-9/18670762_758600700980955_3631810700133395059_n.jpg?_nc_eui2=v1%3AAeFMh6JojbUoYo7JihFhz_a-QbImN6UZa5QE733NBRpBSTutxq_PBZGxxYqMKa1ChRmvOBg7CoSsNtHY6DyFF83Z0T-2Aacude_WEcl-wV5oug&oh=c0321f0d2cab01cd347691d1b3f91c84&oe=5AAF3B44'></ImageProfile>
          </Padding>
          <Description>
            {`Hello, my name is Chun Rapeepat, Full-Stack Web Developer from Thailand. I'm interested in Innovation, Design, Programming, Web, Startup and more...
    `}
          </Description>
          <FooterContainer>
            <Padding>
              <Button color="#E8893F">+ Add Friend</Button>
            </Padding>
          </FooterContainer>
        </Container>
      </FlexContainer>
    )
  }
}

export default CardSlider
