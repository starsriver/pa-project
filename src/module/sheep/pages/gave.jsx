import React, { Component } from 'react'
import './gave.css'

import rankicon_1 from '../imgs/rankicon_1.png'
import rankicon_2 from '../imgs/rankicon_2.png'
import rankicon_3 from '../imgs/rankicon_3.png'

import headicon_1 from '../imgs/headicon_1.png'
import headicon_2 from '../imgs/headicon_2.png'
import headicon_3 from '../imgs/headicon_3.png'
import headicon_4 from '../imgs/headicon_4.png'
import headicon_5 from '../imgs/headicon_5.png'
import headicon_6 from '../imgs/headicon_6.png'
import headicon_7 from '../imgs/headicon_7.png'
import headicon_8 from '../imgs/headicon_8.png'
import headicon_9 from '../imgs/headicon_9.png'

import GaveList from '../components/gave'

export default class Gave extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: data
        }
    }
    render(){
        return (<div style={{flex: 1}}>
            {/* <div style={{marginLeft: 15, marginRight: 15}}>
                <GaveList data={this.state.list}/>
            </div> */}
            <GivePanel />
        </div>)
    }
}

const GivePanel = (props) => {

    return (
        <div className='givepanel-wrapper'>
            <div className='givepanel-root'>
                <div className='givepanel-head'>
                    <span className='givepanel-head-left'>赠送好友羊羔</span>
                    <span className='givepanel-head-right'>X</span>
                </div>
                <span className='givepanel-title'>{`您目前有${1}只羊羔`}</span>
                <div className='givepanel-panel'>
                    <div className='givepanel-panel-left'><div className='givepanel-panel-left-text'></div></div>
                    <div className='givepanel-panel-center'><span className='givepanel-panel-center-text'>xxxxxxxxxx</span></div>
                    <div className='givepanel-panel-right'>
                        <div>
                            <div className='givepanel-panel-right-text1'></div>
                            <div className='givepanel-panel-right-text2'></div>
                        </div>
                    </div>
                </div>
                <div className='givepanel-botton'>
                    <span className='givepanel-botton-text'>立即赠送</span>
                </div>
            </div>
        </div>
    )
}

const data = [{
    rankicon: rankicon_1,
    headicon: headicon_1,
    name: '本尼',
    name2: '驭羊高手',
    gaved: 1,
    canGave: true
},{
    rankicon: rankicon_2,
    headicon: headicon_2,
    name: '卡洛琳',
    name2: '驭羊高手',
    gaved: 1,
    canGave: true
},{
    rankicon: rankicon_3,
    headicon: headicon_3,
    name: '郭逸',
    name2: '驭羊高手',
    gaved: 2,
    canGave: true
},{
    headicon: headicon_4,
    name: '抖森',
    name2: '驭羊高手',
    gaved: 0,
    canGave: true
},{
    headicon: headicon_5,
    name: '阿科拉',
    name2: '驭羊高手',
    gaved: 0,
    canGave: true
},{
    headicon: headicon_6,
    name: '慕容雪',
    name2: '驭羊高手',
    gaved: 6,
    canGave: true
},{
    headicon: headicon_7,
    name: '岑筱绡',
    name2: '驭羊高手',
    gaved: 0,
    canGave: true
},{
    headicon: headicon_8,
    name: '罗伯特',
    canGave: false
},{
    headicon: headicon_9,
    name: '安妮',
    canGave: false
}]
