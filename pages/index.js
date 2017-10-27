import React from 'react'
import styled from 'react-emotion'

import App from '../components/App'

const Page = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  background: #efefef;
`

const Nav = () => <nav />

const Fold = () => <section />

const Reason = () => <section />

const Action = () => <section />

const Footer = () => <footer />

// Flow 1.1
// Landing Page: Explain Intention of BarCode

const Landing = () => (
  <Page>
    <Nav />
    <Fold />
    <Reason />
    <Action />
    <Footer />
  </Page>
)

export default App(Landing)
