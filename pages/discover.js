import React, {Component} from 'react'
import CardSlider from '../components/CardSlider'

// Flow 2.1
// (Gather People with Same Interest)

// Discover and Invite People to Gang
//   Card Slider: Slide to change people
//   Measure: Lists of People you have invited to gang
//   Action: Invite People
//   Shown according to location (nearest first + interests)

class Discover extends Component {
  render() {
    return (
      <div>
        <CardSlider name="Rapeepat Kaewprasit" nickname="Chun"/>
      </div>
    )
  }
}

export default Discover
