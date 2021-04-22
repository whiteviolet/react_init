import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { routes } from '@/router/index'
export default class RouterComponent extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {routes.map(route => {
              return (<Route key={route.name} exact path={route.path} render={(props) => (<route.component />)} />)
            })}
          </Switch>
        </Router>
      </div>
    )
  }
}