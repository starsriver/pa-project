import React, { Component } from 'react'
import './nav.css'

export default class Nav extends Component{
    render(){
        const {goback = () => {}, title} = this.props
        return (
            <div className='nav-wrapper'>
                <div className='nav-back' onClick={goback}><span className='nav-back-text'>{'<'}</span></div>
                <div className='nav-title'><span className='nav-title-text'>{title}</span></div>
            </div>
        )
    }
}