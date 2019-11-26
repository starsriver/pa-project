import React, { Component } from 'react'
import './gave.css'

export default class Gave extends Component {
    render(){
        return (<div className='give-wrapper'>
            <div className='give-list'>
                {this.props.data.map((item, index) => {
                    return (
                        <div className='give-item'>
                            <div className='give-item-left'>
                                {item.rankicon 
                                    ? <img className='give-item-left-index-image' src={item.rankicon}/>
                                    : <span className='give-item-left-index-text'>{index + 1}</span>
                                }
                                <img className='give-item-left-headicon' src={item.headicon}/>
                                <div className='give-item-left-text'>
                                    <span className='give-item-left-text-name'>{item.name}</span>
                                    {item.name2 && <span className='give-item-left-text-name2'>{item.name2}</span>}
                                </div>
                            </div>
                            <div className='give-item-right'>
                            { item.gaved !== undefined && <span className='give-item-right-gaved'>{`已赠送${item.gaved}只`}</span>}
                            <div className='give-item-right-box'>{ item.canGave 
                                ? <span className='give-item-right-text'>赠送</span>
                                : <span className='give-item-right-text'>去邀请</span>
                            }</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>)
    }
}