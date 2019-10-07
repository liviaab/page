import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import liviaPhoto from '../../../assets/images/me.jpg'
import { Contacts } from '../'

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
        <Link to={process.env.PUBLIC_URL}>
          <div className={style.identification}>Lívia Almeida Barbosa</div>
        </Link>
        <br/>
        {this.renderDescription()}
        <br />
        <div className={style.contacts}>
          <Contacts showPlusIcon={!this.props.isSidePresentation} />
        </div>
        <br />
      </Fragment>
    )
  }
}

Presentation.propTypes = {
  style: PropTypes.string.isRequired,
  isSidePresentation: PropTypes.bool
}

Presentation.defaultProps = {
  isSidePresentation: false
}

export default Presentation
