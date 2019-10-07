import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  FaFacebookSquare as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon
} from 'react-icons/fa';
import { MdAdd as PlusIcon } from 'react-icons/md'
import { Link } from 'react-router-dom'

const shouldShowIcon = (showPlusIcon) => {
  if(showPlusIcon){
    return <Link to="/projects"><PlusIcon color="#3B3D40" size="2em" /></Link>
  }
}

const Contacts = ({ showPlusIcon }) => {
  return (
    <Fragment>
      <a
        href="https://github.com/liviaab"
        target="_blank"
        rel="noopener noreferrer">
        <GithubIcon color="#3B3D40" size="2em" />
      </a>
      <a
        href="https://www.linkedin.com/in/liviaab/"
        target="_blank"
        rel="noopener noreferrer">
        <LinkedinIcon color="#3B3D40" size="2em" />
      </a>
      <a
        href="https://www.facebook.com/liviaalmeidab"
        target="_blank"
        rel="noopener noreferrer">
        <FacebookIcon color="#3B3D40" size="2em" />
      </a>
      {shouldShowIcon(showPlusIcon)}
    </Fragment>
  )
}

Contacts.propTypes = {
  showPlusIcon: PropTypes.bool
}

Contacts.defaultProps = {
  showPlusIcon: false
}

export default Contacts
