import React from 'react'
import { Card } from '../../molecules'
import './Talks.scss'

const Talks = () =>
<div className="talks-wrapper">
  <ul className="talks-content">
    <li>
      <Card
        width={200}
        square
        link="https://docs.google.com/presentation/d/e/2PACX-1vR-vpGDeIBFF4q9XGuyNXtKAxfaM8XiM2zan1BGaBSSpK2l8UaySXsDQiKaTfqbGTHOSP8gIX9oB3mQ/pub?start=false&loop=false&delayms=3000&slide=id.p"
      >
        Do básico ao MVP
      </Card>

      <p className="talk-description">
        Você sabe HTML, CSS e de um pouco de Javascript mas perde a paciência quando tem que fazer as telas de uma aplicação?
        <br/>Você quer fazer um frontend que dá pra manter e evoluir?
        <br/>Aqui conto minha experiência de como eu saí do básico (sabendo só HTML, CSS, JavaScript)
        para participar da construção de um frontend no MVP desenvolvido pelo time de Soluções Universitárias na Saraiva Educação :)
      </p>
    </li>
  </ul>
</div>

export default Talks
