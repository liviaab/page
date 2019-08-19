import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

const labels = ['Projetos', 'Talks', 'Sobre', 'Extras']
const paths = [
  '/projects', '/talks', '/about', '/extras']

const Menu = () => (
  <aside className="side-bar-menu">
    <nav className="side-bar-menu__nav">
      <ul className="main-menu__wrapper">
        {labels.map((label, index) => (
        <li className="menu-item__wrapper" key={label}>
          <Link
            to={paths[index]}
            className="menu-item__content"
          >
            {label}
          </Link>
        </li>
        ))}
      </ul>
    </nav>
  </aside>
)

export default Menu
