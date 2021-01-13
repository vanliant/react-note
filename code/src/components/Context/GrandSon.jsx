import React, { Component } from 'react'
import { Consumer } from '../../pages/context'

export default class GrandSon extends Component {
    render() {
        return (
            <Consumer>
                {
                    name => (
                        <div style={{margin:'50px',height:'200px',border:'1px solid pink'}}>
                            孙组件接收的value：{name}
                        </div>
                    )
                }
            </Consumer>
        )
    }
}
