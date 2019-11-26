import React, { Component } from 'react'
import './main.css'

import Action from '../components/action'
import Rank from '../components/rank'

import main_background from '../imgs/main_background.png'

export default class Main extends Component {
    render(){
        return (<div>
            <img className='main_background' src={main_background}/>
            <div style={{marginLeft: 15}}>
                <Action />
                <Rank />
            </div>
        </div>)
    }
}