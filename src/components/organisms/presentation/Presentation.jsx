import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  FaFacebookSquare as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon
} from 'react-icons/fa';
import { MdAdd as PlusIcon } from 'react-icons/md'
import { Link } from 'react-router-dom'
import liviaPhoto from '../../../assets/images/me.jpg'

class Presentation extends Component {
  renderHeader = () => {
    if(!this.props.isSidePresentation) {
      return <div className={this.props.style.header} />
    }
  }

  renderDescription = () => {
    const { style } = this.props

    if(this.props.isSidePresentation) {
      return (
        <div className={style.description}>
          Desenvolvedora full-stack, não muito fã de café e jogadora de vôlei nas horas vagas :)
        </div>
      )
    }

    return (
      <div className={style.description}>
        Graduada em Ciência da Computação pela UFMG,desenvolvedora full-stack que
        quer se desafiar cada vez mais a sair da zona de conforto.
        <br />
        Jogadora de vôlei nas horas vagas :)
      </div>
    )
  }

  render() {
    const { style } = this.props

    return (
      <Fragment>
        {this.renderHeader()}
        <div className={style.round_image}>
          <Link to={process.env.PUBLIC_URL}>
            <img src={liviaPhoto} alt="Foto da Livia" className={style.round_border} />
          </Link>
        </div>
        <br />
        <div className={style.identification}>Lívia Almeida Barbosa</div>
        <br/>
        {this.renderDescription()}
        <br />
        <div className={style.contacts}>
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
          <Link to="/projects"><PlusIcon color="#3B3D40" size="2em" /></Link>
        </div>
        <br />
      </Fragment>
    )
  }
}

Presentation.propTypes = {
  style: PropTypes.bool.isRequired
}

export default Presentation
