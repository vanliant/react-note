import React, { Component } from 'react'

import { increment, decrement, multiply, division } from '../../redux/actions/count'
import { update } from '../../redux/actions/inputUpdate'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

class LeftSide extends Component {
    render() {
        const { num } = this.props
        return (
            <div className='left-side' >
                <h4>左侧button按钮的操作结果，存储在store中：</h4>
                <div className='operator'>
                    <input type='number' value={num} onChange={this.inputChange} />
                    <button onClick={this.increment}>+1</button>
                    <button onClick={this.decrement}>-1</button>
                    <button onClick={this.multiply}>*2</button>
                    <button onClick={this.division}>/2</button>

                    <input placeholder={'实时更新至右侧'} onChange={this.changeValue} />
                </div>
            </div>
        )
    }

    inputChange = (e) => {
        this.setState({
            num: Number(e.target.value)
        })
    }

    increment = () => {
        const { num } = this.props
        this.props.increment({
            num: Number(num),
            step: 1
        })
    }

    decrement = () => {
        const { num } = this.props
        this.props.decrement({
            num: Number(num),
            step: 1
        })
    }

    multiply = () => {
        const { num } = this.props
        this.props.multiply({
            num: Number(num),
            step: 2
        })
    }

    division = () => {
        const { num } = this.props
        this.props.division({
            num: Number(num),
            step: 2
        })
    }

    changeValue = (e) => {
        console.log(e.target.value)
        this.props.update(e.target.value)
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({
        num: state.count,
    }),
    { increment, decrement, multiply, division ,update}
)(LeftSide)


// npm i redux 
// npm i react-redux
// npm install redux-thunk --save-dev
// npm i redux-devtools-extension