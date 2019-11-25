import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch, Link } from 'react-router-dom'
import NotFind from '../components/notFind'
import Sheep from '../module/sheep/index'
// import About from 'routes/about'

const Routes = () => (
  <HashRouter>
      <Route exact path="/" render={() => <Redirect to="/sheep" />} />
        <Switch>
            <Route path="/sheep" component={Sheep} />
            <Route path="/" component={NotFind} />
        </Switch>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App