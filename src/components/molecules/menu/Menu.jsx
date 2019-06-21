import React from 'react'
import './Menu.scss'

const labels = ['Projects', 'Stuff', 'About me', 'Extras']
const paths = ['/projects', '/stuff', '/about', '/extras']

const Menu = () => (
    <div className="main-menu__wrapper">
      {labels.map((label, index) => (
        <div className="menu-item__wrapper" key={label}>
          <a
            className="menu-item__content"
            href={paths[index]}
          >
            {label}
          </a>
        </div>
      ))}
    </div>
)

export default Menu
