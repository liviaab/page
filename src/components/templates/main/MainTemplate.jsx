import React from 'react'
import { Menu } from '../../molecules'
import './MainTemplate.scss'

const MainTemplate = ({ children }) => (
  <div className='main-template'>
    <Menu />
    <div className="main-template__content-wrapper">
      <div className="main-template__content">
        {children}
      </div>
    </div>
  </div>
)
export default MainTemplate
