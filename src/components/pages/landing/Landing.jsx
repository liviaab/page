import React from 'react'
import { Presentation } from '../../organisms'
import './Landing.scss'
import landingStyle from '../../organisms/presentation/Presentation.module.scss'


const Landing = () => (
  <div className="landing">
    <Presentation style={landingStyle} />
  </div>
)

export default Landing
