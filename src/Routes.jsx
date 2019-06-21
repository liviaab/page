import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Landing, Projects } from './components/pages'
import MainTemplate from './components/templates'

const withMainTemplate = (component, props) => (
  <MainTemplate {...props}>
    {component}
  </MainTemplate>
)


const Routes = () => (
  <Switch>
      <Route exact path="/" component={props => <Landing {...props} />} />
      <Route exact path="/projects" component={props => withMainTemplate(<Projects />)} />
  </Switch>
)

export default Routes
