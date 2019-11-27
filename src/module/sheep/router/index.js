import React from 'react'
import { Route, Switch } from 'react-router'
import {  Link } from 'react-router-dom'
import './index.css'

import Main from '../pages/main'
import Gave from '../pages/gave'
// import About from 'routes/about'

const Routes = () => (
  <Switch>
        <Route exact path='/sheep' render={() => {
          return (<div className='nav-link-wrapper'>
              <Link className='nav-link' to='/sheep/main'>主页</Link>
              <Link className='nav-link' to='/sheep/gave'>赠送羊羔</Link>
          </div>)
        }} />
        <Route path='/sheep/main' component={Main} />
        <Route path='/sheep/gave' component={Gave} />
  </Switch>
)
export default Routes