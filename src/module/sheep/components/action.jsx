import React, { Component } from 'react'
import './action.css'

export default class Action extends Component {
    render(){
        return (<div className='action-wrapper'>
            <h3 className='action-title'>最新动态</h3>
            <div className='action-list'>
                {data.map(item => {
                    return (
                        <div className='action-item'>
                            <span className='action-item-name'>{item.name}</span>
                            <span className='action-item-action'>{actionMap[item.actionType]}</span>
                            <span className='action-item-data'>{`${item.data}小时前`}</span>
                        </div>
                    )
                })}
            </div>
        </div>)
    }
}

const data = [{
    name: '张三',
    actionType: 1,
    data: Math.floor(Math.random() * 24)
},{
    name: '李四',
    actionType: 2,
    data: Math.floor(Math.random() * 24)
},{
    name: '王五',
    actionType: 3,
    data: Math.floor(Math.random() * 24)
}]

const actionMap = {
    1: '帮你赶走了一只羊',
    2: '送了你一只羊羔',
    3: '的羊来你家偷吃',
}