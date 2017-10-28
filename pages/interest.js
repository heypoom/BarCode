import React, {Component} from 'react'
import {keyframes} from 'emotion'
import styled from 'react-emotion'
import Router from 'next/router'
import Ink from 'react-ink'

import App from '../components/App'
import StandardButton from '../components/Button'

// Flow 1.2
// What's Your Interest?
// Gather Personal Data

// Phoom (Polyglot)
//  1. GitHub Profile: phoomparin
//    Contribution Count: 680
//    Pinned Projects: Axi, FlipED, SkootarClone
//  2. Stickers: React, Redux, JavaScript, Scala, Kubernetes, Go, Node, Clojure, Kotlin
//  3. Roles: Full Stack Developer @ iTAX
//  4. Geek Topic: Functional Programming, Software Dev Process
//  5. Personal Interest: Thai Royal, Music, Startups, Business

const Backdrop = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(https://kazzkiq.github.io/CodeFlask.js/img/bg-main_2x.png)
    #3d3a4e;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  max-width: 800px;
  height: 100%;
  min-height: 100vh;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(4em);
  }

  100% {
    opacity: 1;
  }
`

const Card = styled.div`
  position: relative;
  min-width: 30em;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
`

const Heading = styled.h2`
  margin: 0;
  line-height: 1.3em;
  color: #555;
  font-size: 2.3em;
  font-weight: 300;
`

const Desc = styled.p`
  margin: 0.5em 0 0.8em 0;
  color: #777;
  font-size: 1.1em;
  font-weight: 300;
`

const Small = styled.div`
  color: #777;
  font-size: 1.3em;
  font-weight: 300;
`

const Button = styled(StandardButton)`
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba(255, 118, 87, 0.44);
  border-radius: 1em;

  &:hover {
    background: #ff5e39;
  }
`

const CardBody = styled.div`
  padding: 1.5em 1.8em;
  background: white;
`

const CardImage = styled.div`
  position: relative;
  background-color: white;
  background-image: url(/static/${props => props.img}.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 18em;
  width: 100%;
`

const Progress = styled.div`
  height: 3px;
  width: ${props => props.is || 100}%;
  background: white;
  box-shadow: 0 2px 5px 0 white, 0 2px 10px 0 white;
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
`

const steps = [
  <div>
    <Desc>
      Hello! <br />
      We're going to let other developers see your GitHub Profile
    </Desc>
  </div>,
  <div>
    <Desc>
      Hello! <br />
      We're going to let other developers see your GitHub Profile
    </Desc>
  </div>,
  <div>
    <Desc>
      This is almost it! <br />
      We're going to let other developers see your GitHub Profile
    </Desc>
  </div>,
  <div>
    <Desc>
      This is almost it! <br />
      We're going to let other developers see your GitHub Profile
    </Desc>
  </div>,
  <div>
    <Desc>
      This is almost it! <br />
      We're going to let other developers see your GitHub Profile
    </Desc>
  </div>
]

const Steps = ({step = 0}) => steps[step]

const stepNames = [
  'The Journey Begins!',
  'Pick some Stickers!',
  'What do you do?',
  "What's your geeky interest?",
  'What else do you enjoy?'
]

const stepImages = ['circle', 'circle', 'circle', 'circle', 'circle']

const stepButtons = [
  'Login with GitHub',
  'Next',
  'Next',
  'Next',
  'Create Your Profile'
]

const Back = styled.div`
  position: absolute;
  left: 1em;
  top: 1em;
  z-index: 1;

  width: 2em;
  height: 2em;
  background: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  cursor: pointer;
`

class OnboardCard extends Component {
  state = {step: 0}

  next = () => {
    if (this.state.step === 4) {
      Router.push('/discover')
    } else if (this.state.step < 4) {
      this.setState({step: this.state.step + 1})
    }
  }

  prev = () => this.state.step > 0 && this.setState({step: this.state.step - 1})

  render = () => (
    <Card>
      <Progress is={(this.state.step + 1) * 20} />
      <Back onClick={this.prev} />
      <CardImage img={stepImages[this.state.step]}>
        <Ink />
      </CardImage>
      <CardBody>
        <Small>Step {this.state.step + 1}</Small>
        <Heading>{stepNames[this.state.step]}</Heading>
        <Steps step={this.state.step} />
        <Button color="#ff7657" onClick={this.next}>
          {stepButtons[this.state.step]}
        </Button>
      </CardBody>
    </Card>
  )
}

const OnboardView = () => (
  <Backdrop>
    <Container>
      <OnboardCard />
    </Container>
  </Backdrop>
)

export default App(OnboardView)
