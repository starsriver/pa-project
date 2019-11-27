import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../../../components/nav'
import './beginfind.css'

class BeginFind extends Component {
    render(){
        return (
            <div className='beginfind-wrapper'>
                <Nav title='发起寻找' goback={() => {
                    this.props.history.goBack()
                }}></Nav>
                <div className='beginfind-main'>
                    <span contenteditable="true" className='beginfind-main-text1'>需要寻找在职大学生做孩子的家庭教师，最好是师范生，数学方面有特长</span>
                    <div className='beginfind-main-text2'>
                        <span className='beginfind-main-text2-text'>14/20</span>
                    </div>
                </div>
                <div className='beginfind-main-1'>
                    <div className='beginfind-main-1-left'><span className='beginfind-main-1-left-text'>赏金</span></div>
                    <div className='beginfind-main-1-center'><span contenteditable="true" className='beginfind-main-1-center-text'>200</span></div>
                    <div className='beginfind-main-1-right'><span className='beginfind-main-1-right-text'>{'>'}</span></div>
                </div>
                <div className='beginfind-main-1'>
                    <div className='beginfind-main-1-left'><span className='beginfind-main-1-left-text'>有效时间</span></div>
                    <div className='beginfind-main-1-center'><span contenteditable="true" className='beginfind-main-1-center-text'>2029年2月28日</span></div>
                    <div className='beginfind-main-1-right'><span className='beginfind-main-1-right-text'>{'>'}</span></div>
                </div>
                <div className='beginfind-main-1'>
                    <div className='beginfind-main-1-left'><span className='beginfind-main-1-left-text'>选择分类</span></div>
                    <div className='beginfind-main-1-center'><span className='beginfind-main-1-center-text'></span></div>
                    <div className='beginfind-main-1-right'><span className='beginfind-main-1-right-text'>{'>'}</span></div>
                </div>
                <div className='beginfind-main-1'>
                    <div className='beginfind-main-1-left'><span className='beginfind-main-1-left-text'>发布地区</span></div>
                    <div className='beginfind-main-1-center'><span contenteditable="true" className='beginfind-main-1-center-text'>广东省 深圳市 福田区</span></div>
                    <div className='beginfind-main-1-right'><span className='beginfind-main-1-right-text'>{'>'}</span></div>
                </div>
                <div className='beginfind-main-ok' onClick={() => {
                    alert('发布成功')
                }}>
                    <span className='beginfind-main-ok-text'>确认发布</span>
                </div>
            </div>
        )
    }
}

export default withRouter(BeginFind)