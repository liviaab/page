import React from 'react'
import { Presentation } from '../../organisms'
import './MainTemplate.scss'
import sideBarStyle from '../../organisms/presentation/SidePresentation.module.scss'

const MainTemplate = ({ children }) => (
  <div className='main-template'>
    <div className="sidebar-presentation">
      <Presentation style={sideBarStyle} />
    </div>
    <div className="main-template__content-wrapper">
      <div className="main-template__content">
        {children}
      </div>
    </div>
  </div>
)
export default MainTemplate
