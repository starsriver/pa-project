import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './main.css'

import Action from '../components/action'
import Rank from '../components/rank'
import Nav from '../../../components/nav'

import main_background from '../imgs/main_background.png'

class Main extends Component {
    render(){
        return (<div>
            <Nav title='羊村部落' goback={() => {
                this.props.history.goBack()
            }}/>
            <img className='main_background' src={main_background}/>
            <div style={{marginLeft: 15}}>
                <Action />
                <Rank />
            </div>
        </div>)
    }
}

export default withRouter(Main)