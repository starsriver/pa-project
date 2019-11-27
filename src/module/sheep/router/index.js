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
              <Link className='nav-link-no'>兑换商城（制作中）</Link>
              <Link className='nav-link-no'>消息提示（制作中）</Link>
              <Link className='nav-link-no'>赠送历史（制作中）</Link>
              <Link className='nav-link-no'>配对（制作中）</Link>
              <Link className='nav-link-no'>排名（制作中）</Link>
              <Link className='nav-link-no'>好友页面-偷吃（制作中）</Link>
              <Link className='nav-link-no'>好友页面-有人偷吃（制作中）</Link>
              <Link className='nav-link-no'>好友页面-赶羊（制作中）</Link>
              <Link className='nav-link-no'>好友页面-配对（制作中）</Link>
              <Link className='nav-link-no'>好友页面-无草可收（制作中）</Link>
              <Link className='nav-link-no'>主页-有羊偷吃（制作中）</Link>
              <Link className='nav-link-no'>主页-分享</Link>
              <Link className='nav-link-no'>主页-任务</Link>
              <Link className='nav-link-no'>主页-村长送羊</Link>
              <Link className='nav-link-no'>主页-收草中</Link>
              <Link className='nav-link-no'>主页-有草可收</Link>
              <Link className='nav-link-no'>代理人首页</Link>
          </div>)
        }} />
        <Route path='/sheep/main' component={Main} />
        <Route path='/sheep/gave' component={Gave} />
  </Switch>
)
export default Routes