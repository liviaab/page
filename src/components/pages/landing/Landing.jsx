import React, { Component } from 'react'
import {
  FaFacebookSquare as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon
 } from "react-icons/fa";
import { MdAdd as PlusIcon } from "react-icons/md"
import { Link } from "react-router-dom"
import './Landing.scss'
import liviaPhoto from '../../../assets/images/me.jpg'

class Landing extends Component {
  render() {
    return(
      <div class="landing">
        <div className="header">
        </div>

        <div className="round-image">
          <img src={liviaPhoto} alt="Livia" className="round-border" />
          {/*https://www.pexels.com/*/}
        </div>

        <div className="information">
          <div className="identification">Lívia Almeida Barbosa</div>
          <div className="description">
            Graduada em Ciência da Computação pela UFMG,
             desenvolvedora full-stack que quer se desafiar cada vez mais a sair da zona de conforto.
             <br />
             Jogadora de vôlei nas horas vagas :)
          </div>
          <div className="contacts">
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
            <Link to="/"><PlusIcon color="#3B3D40" size="2em" /></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
