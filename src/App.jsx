import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const App = () => (
  <BrowserRouter basename="/page" >
    <Routes />
  </BrowserRouter>
)

export default App
