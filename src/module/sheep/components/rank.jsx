import React, { Component } from 'react'
import './rank.css'
import rankicon_1 from '../imgs/rankicon_1.png'
import rankicon_2 from '../imgs/rankicon_2.png'
import rankicon_3 from '../imgs/rankicon_3.png'

import headicon_1 from '../imgs/headicon_1.png'
import headicon_2 from '../imgs/headicon_2.png'
import headicon_3 from '../imgs/headicon_3.png'
import headicon_4 from '../imgs/headicon_4.png'
import headicon_5 from '../imgs/headicon_5.png'
import headicon_6 from '../imgs/headicon_6.png'

import ranktype_1 from '../imgs/ranktype_1.png'
import ranktype_2 from '../imgs/ranktype_2.png'
import ranktype_3 from '../imgs/ranktype_3.png'



export default class Rank extends Component {
    render(){
        return (<div className='rank-wrapper'>
            <h3 className='rank-title'>村内排名</h3>
            <h4 className='rank-title2'>{`我的排名：村内${data.indexIn}/${data.indexInCount}, 世界${data.indexWorld}/${data.indexWorldCount}`}</h4>
            <div className='rank-list'>
                {data.list.map((item, index) => {
                    return (
                        <div className='rank-item'>
                            <div className='rank-item-left'>
                                {item.rankicon 
                                    ? <img className='rank-item-left-index-image' src={item.rankicon}/>
                                    : <span className='rank-item-left-index-text'>{index + 1}</span>
                                }
                                <img className='rank-item-left-headicon' src={item.headicon}/>
                                <div className='rank-item-left-text'>
                                    <span className='rank-item-left-text-name'>{item.name}</span>
                                    <span className='rank-item-left-text-name2'>{item.name2}</span>
                                </div>
                            </div>
                            <div className='rank-item-right'>
                                { item.ranktype && <img className='rank-item-right-image' src={item.ranktype}/>}
                                <span className='rank-item-right-text'>{`${item.number}值`}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>)
    }
}

const data = {
    indexIn: 3,
    indexInCount: 30,
    indexWorld: 1928,
    indexWorldCount: 9283098,
    list:[{
        rankicon: rankicon_1,
        headicon: headicon_1,
        name: '本尼',
        name2: '驭羊高手',
        ranktype: ranktype_1,
        number: 18799
    },{
        rankicon: rankicon_2,
        headicon: headicon_2,
        name: '卡洛琳',
        name2: '驭羊高手',
        ranktype: ranktype_2,
        number: 17643
    },{
        rankicon: rankicon_3,
        headicon: headicon_3,
        name: '郭逸',
        name2: '驭羊高手',
        ranktype: ranktype_3,
        number: 15791
    },{
        headicon: headicon_4,
        name: '抖森',
        name2: '驭羊高手',
        number: 10462
    },{
        headicon: headicon_5,
        name: '阿科拉',
        name2: '驭羊高手',
        number: 9652
    },{
        headicon: headicon_6,
        name: '慕容雪',
        name2: '驭羊高手',
        number: 5791
    },]
}