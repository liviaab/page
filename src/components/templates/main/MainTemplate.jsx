import React from 'react'
import './MainTemplate.scss'

const MainTemplate = ({ children }) => (
  <div className='main-template'>
    <div className="main-template__content-wrapper">
      <div className="main-template__content">
        {children}
      </div>
    </div>
  </div>
)
export default MainTemplate
