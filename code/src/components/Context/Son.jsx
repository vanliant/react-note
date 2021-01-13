import React, { Component } from 'react'
import GrandSon from './GrandSon'
import { Consumer } from '../../pages/context'

export default class Son extends Component {
    render() {
        return (
            <Consumer>
                {
                    name => (
                        <div style={{ margin: '50px', height: '300px', border: '1px solid red' }}>
                            子组件接收的value：{name}
                            <GrandSon />
                        </div>
                    )
                }
            </Consumer>

        )
    }
}
