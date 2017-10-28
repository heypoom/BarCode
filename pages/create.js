import React from 'react'
import styled from 'react-emotion'
import Link from 'next/link'

import App from '../components/App'
import ProfileCard from '../components/ProfileCard'
import StandardButton from '../components/Button'

import {Backdrop, Container} from './discover'
import {Card, CardBody, CardImage} from './interest'

// Flow 2.2
// Start Your Gang’s Meetup

//  When enough people accepted your invitation, you can start the meetup.
//  Use gitter.im or messenger or whatever to chat

//  Meetup Location: E.g. Sia O Castle
//  Theme: E.g. Clojure, Functional Programming, Category Theory, Agile
//  Gang Members: E.g. Alice, Bob, Charlie, Sia O (4 People)

const Paragraph = styled.p`
  margin: 0;
  color: #555;
  font-size: 1.1em;
`

const Upper = styled.div`
  margin-bottom: 1.8em;
  width: 100%;
`

const Button = styled(StandardButton)`
  position: relative;
  width: 100%;
  margin-top: 1em;
`

const CreateMeetup = () => (
  <Backdrop>
    <Container>
      <Upper>
        <Card>
          <CardImage img="circle" />
          <CardBody>
            <Paragraph>
              <b>Location</b>: NapLab, Chula Soi 9<br />
              <b>Theme</b>: Functional Programming 101<br />
              <b>BarCode Activities</b>: Pair Programming, Mock Interview
            </Paragraph>
            <Button color="#ff7657">Begin Meetup</Button>
          </CardBody>
        </Card>
      </Upper>
      <Upper>
        <Card>
          <ProfileCard name="Rapeepat Kaewprasit" nickname="Chun" invited />
        </Card>
      </Upper>
      <Link href="/scan" passHref>
        <Button color="#ff7657">Scan for Friends</Button>
      </Link>
    </Container>
  </Backdrop>
)

export default App(CreateMeetup)
