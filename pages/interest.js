import React, {Component} from 'react'
import {connect} from 'react-redux'
import {keyframes} from 'emotion'
import styled from 'react-emotion'
import Ink from 'react-ink'

import App from '../components/App'
import StandardButton from '../components/Button'

import {next, prev, toggleSticker} from '../ducks/app'

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
  padding: 3em 2.3em;
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
  width: ${props => props.value || 100}%;
  background: white;
  box-shadow: 0 2px 5px 0 white, 0 2px 10px 0 white;
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);
`

const Sticker = styled.img`
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);

  width: 3em;
  height: 3em;
  cursor: pointer;

  mix-blend-mode: multiply;
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.1))
    ${props => (props.selected ? 'brightness(1.1)' : 'saturate(0)')};

  &:hover {
    transform: scale(1.1);
  }
`

const stickers = [
  'angular.svg',
  'graphcool.png',
  'redis.svg',
  'vue.png',
  'apollo.png',
  'graphql.png',
  'python.png',
  'redux.png',
  'firebase.png',
  'node.png',
  'react.svg',
  'relay.svg'
]

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;

  margin-bottom: 1em;
`

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0.6em 0;
  width: 15%;
`

const steps = [
  <div>
    <Desc>
      Hello! <br />
      We're going to let other developers see your GitHub Profile
    </Desc>
  </div>,
  <Desc>
    That's Awesome! <br />
    Now, let's choose some stickers that you're interested in! Pick the stickers
    that match your interest.
  </Desc>,
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

const StickerCardBody = styled(CardBody)`
  background: #f7f7f9;
  margin-top: 1.8em;
`

const StickerCard = ({next, step, onChange, value}) => (
  <Card>
    <StickerCardBody>
      <Row>
        {stickers.map((sticker, index) => (
          <Col key={index}>
            <Sticker
              src={`/static/stickers/${sticker}`}
              onClick={() => onChange(index)}
              selected={value[index]}
            />
          </Col>
        ))}
      </Row>

      <Button color="#ff7657" onClick={next}>
        {stepButtons[step]}
      </Button>
    </StickerCardBody>
  </Card>
)

const OnboardCard = ({toggleSticker, stickers, step, prev, next}) => (
  <div>
    <Card>
      <Progress value={(step + 1) * 20} />
      <Back onClick={prev} />
      <CardImage img={stepImages[step]}>
        <Ink />
      </CardImage>
      <CardBody>
        <Small>Step {step + 1}</Small>
        <Heading>{stepNames[step]}</Heading>
        <Steps step={step} />
        {step !== 1 && (
          <Button color="#ff7657" onClick={next}>
            {stepButtons[step]}
          </Button>
        )}
      </CardBody>
    </Card>
    {step === 1 && (
      <StickerCard
        next={next}
        step={step}
        onChange={toggleSticker}
        value={stickers}
      />
    )}
  </div>
)

const mapStateToProps = state => ({
  step: state.app.step,
  stickers: state.app.stickers
})

const ConnectedOnboardCard = connect(mapStateToProps, {
  toggleSticker,
  prev,
  next
})(OnboardCard)

const OnboardView = () => (
  <Backdrop>
    <Container>
      <ConnectedOnboardCard />
    </Container>
  </Backdrop>
)

export default App(OnboardView)
