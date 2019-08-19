import React from 'react'
import PropTypes from 'prop-types'
import style from './Card.module.scss'

const Card = ({ width, height, square, link, children }) => {
  const cardHeight = square ? width : height

  const card = (
    <div
      className={style.default_card}
      style={{width: width + 'px', height: cardHeight + 'px'}}
    >
      {children}
    </div>
  )

  if (link) {
    return <a href={link}> {card} </a>
  }

  return card
}

Card.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  square: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node
}

Card.defaultProps = {
  height: 100,
  square: false,
  link: '',
  children: undefined
}

export default Card
