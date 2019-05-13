import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Landing, Projects, Extras } from './components/pages'
import MainTemplate from './components/templates'

const withMainTemplate = (component, props) =>  (
  <MainTemplate {...props}>
    {component}
  </MainTemplate>
)

const Routes = () => (
    <Switch>
        <Route exact path="/" component={props => withMainTemplate(<Landing {...props} />)} />
        // <Route exact path="/projects" component={props => withMainTemplate(<Projects {...props} />)} />
        // <Route exact path="/extras" component={props => withMainTemplate(<Extras {...props} />)} />
    </Switch>
)





export default Routes
