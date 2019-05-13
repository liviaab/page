import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const App = () => (
  <BrowserRouter basename="/page" >
    <Routes />
  </BrowserRouter>
)

export default App
