import React, {Component} from 'react'
import styled from 'react-emotion'
import Link from 'next/link'

import App from '../components/App'
import CardSlider from '../components/CardSlider'
import StandardButton from '../components/Button'

// Flow 2.1
// (Gather People with Same Interest)

// Discover and Invite People to Gang
//   Card Slider: Slide to change people
//   Measure: Lists of People you have invited to gang
//   Action: Invite People
//   Shown according to location (nearest first + interests)

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  background: url(https://kazzkiq.github.io/CodeFlask.js/img/bg-main_2x.png)
    #3d3a4e;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 800px;
  margin: 0 auto;
  padding: 3.5em 1em;
`

const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  color: #555;
  width: 100%;
  padding: 0.4em;
  background: white;
  text-align: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`

const Button = styled(StandardButton)`
  width: 100%;
  margin-top: 2em;
`

@App
export default class Discover extends Component {
  render() {
    return (
      <Backdrop>
        <Header>
          <b>25</b> Developers Near You -- Invite Them to Meetup!
        </Header>
        <Container>
          <CardSlider name="Rapeepat Kaewprasit" nickname="Chun" />
          <Link href="/scan" passHref>
            <Button color="#ff7657">Scan for Friends</Button>
          </Link>
        </Container>
      </Backdrop>
    )
  }
}
