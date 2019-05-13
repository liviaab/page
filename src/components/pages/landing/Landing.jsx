import React, { Component } from 'react'
import { FaFacebookSquare as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon
 } from "react-icons/fa";
import './Landing.scss'
import liviaPhoto from '../../../assets/images/me.jpg'

class Landing extends Component {
  render() {
    return(
      <div id="landing">
        <div className="header">
        </div>

        <div className="round-image">
          <img src={liviaPhoto} alt="Photo of Livia" className="round" />
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
            <GithubIcon color="#3B3D40" size="2em" />
            <LinkedinIcon color="#3B3D40" size="2em" />
            <FacebookIcon color="#3B3D40" size="2em" />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
