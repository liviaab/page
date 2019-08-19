import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Routes />
  </BrowserRouter>
)

export default App
