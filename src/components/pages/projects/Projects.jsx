import React from 'react'
import { Card } from '../../molecules'
import vhdLogo from '../../../assets/images/vhd.png'
import courtCrawler from '../../../assets/images/jus-challenge.png'
import './Projects.scss'

const Projects = () =>
<div className="projects-wrapper">
  <ul className="projects-content">
    <li>
      <Card
        width={200}
        square
        link="https://github.com/liviaab/VHD"
      >
        <figure>
          <img
            src={vhdLogo}
            alt="Imagem do primeiro projeto: Visualização de hiper distribuições"
          />
          <figcaption>Visualization of Hyper-Distributions</figcaption>
        </figure>
      </Card>
    </li>

    <li>
      <Card
        width={200}
        square
        link="https://github.com/liviaab/frontend-crawler"
      >
        <figure>
          <img
            src={courtCrawler}
            alt="Imagem do segundo projeto: Crawler do Tribunal de Justiça do Estado de Alagoas"
          />
          <figcaption>Consulta de processos de primeiro grau no TJAL</figcaption>
        </figure>
      </Card>
    </li>

    <li><Card width={200} square> To be added</Card></li>
  </ul>
</div>

export default Projects
