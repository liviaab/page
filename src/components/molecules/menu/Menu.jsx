import React from 'react'
import './Menu.scss'

const labels = ['Projetos', 'Talks', 'Sobre', 'Extras']
const paths = [
  `${process.env.PUBLIC_URL}/projects`,
  `${process.env.PUBLIC_URL}/talks`,
  '/about', '/extras']

const Menu = () => (
  <aside className="side-bar-menu">
    <nav className="side-bar-menu__nav">
      <ul className="main-menu__wrapper">
        {labels.map((label, index) => (
        <li className="menu-item__wrapper" key={label}>
          <a
            className="menu-item__content"
            href={paths[index]}
          >
            {label}
          </a>
        </li>
        ))}
      </ul>
    </nav>
  </aside>
)

export default Menu
