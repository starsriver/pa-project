import React from 'react'
import { Route, Switch } from 'react-router'
import {  Link } from 'react-router-dom'
import './index.css'

import BeginFind from '../pages/beginfind'
// import Gave from '../pages/gave'

const Routes = () => (
  <Switch>
        <Route exact path='/find' render={() => {
          return (<div className='nav-link-wrapper'>
              <Link className='nav-link' to='/find/beginfind'>发起寻找</Link>
              <Link className='nav-link-no'>发布详情-进行中（制作中）</Link>
              <Link className='nav-link-no'>发布详情-已完成（制作中）</Link>
              <Link className='nav-link-no'>查看接力人（制作中）</Link>
              <Link className='nav-link-no'>查看接力链路（制作中）</Link>
              <Link className='nav-link-no'>此问题已解决（制作中）</Link>
              <Link className='nav-link-no'>一对一沟通（制作中）</Link>
              <Link className='nav-link-no'>获得赏金（制作中）</Link>
              <Link className='nav-link-no'>资格认证（制作中）</Link>
              <Link className='nav-link-no'>转发\邀请（制作中）</Link>
              <Link className='nav-link-no'>消息盒子（制作中）</Link>
              <Link className='nav-link-no'>主页（制作中）</Link>
          </div>)
        }} />
        <Route path='/find/beginfind' component={BeginFind} />
  </Switch>
)
export default Routes