import React from 'react'
import { Route, Switch } from 'react-router'
import { } from 'react-router-dom'

import Main from '../pages/main'
import Gave from '../pages/gave'
// import About from 'routes/about'

const Routes = () => (
  <Switch>
        <Route path='/sheep/main' component={Main} />
        <Route path='/sheep/gave' component={Gave} />
  </Switch>
)
export default Routes