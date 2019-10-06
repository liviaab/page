import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
import {
  FaFacebookSquare as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon
 } from "react-icons/fa";
import { MdAdd as PlusIcon } from "react-icons/md"
import { Link } from "react-router-dom"
import style from './Presentation.module.scss'
import liviaPhoto from '../../../assets/images/me.jpg'

const Presentation = () => (
  <Fragment>
      <div className={style.header} />

      <div className={style.round_image}>
        <Link to={process.env.PUBLIC_URL}>
          <img src={liviaPhoto} alt="Foto da Livia" className={style.round_border} />
        </Link>
        {/*https://www.pexels.com/*/}
      </div>

      <div className={style.information}>
        <div className={style.identification}>Lívia Almeida Barbosa</div>
        <div className={style.description}>
          Graduada em Ciência da Computação pela UFMG,
           desenvolvedora full-stack que quer se desafiar cada vez mais a sair da zona de conforto.
           <br />
           Jogadora de vôlei nas horas vagas :)
        </div>
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
    </div>
  </Fragment>
)

export default Presentation
