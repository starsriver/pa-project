import React from 'react'
import { Route, Switch } from 'react-router'
import { } from 'react-router-dom'

import Main from '../pages/main'
// import About from 'routes/about'

const Routes = () => (
  <Switch>
        <Route path='/sheep/main' component={Main} />
        <Route path='/sheep/b' render={() => (<div>11111111111111</div>)} />
  </Switch>
)
export default Routes