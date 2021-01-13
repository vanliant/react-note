import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

class RightSide extends Component {
    render() {
        const { leftNum, inputData } = this.props
        console.log(this.props)
        return (
            <div className='right-side' >
                <h4>右侧从store中获取最新数据</h4>
                <div>
                    第一个input的value====》{leftNum}
                </div>

                <div>
                    第二个input的value====》{inputData}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        leftNum: state.count,
        inputData: state.inputReducer
    })
)(RightSide)
