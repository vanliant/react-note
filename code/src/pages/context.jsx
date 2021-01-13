import React, { Component } from 'react'
import Son from '../components/Context/Son'

export const { Provider, Consumer } = React.createContext("默认名称");

export default class context extends Component {
    state = {
        value: 'context测试'
    }
    render() {
        const { value } = this.state
        let name = value
        return (
            <Provider value={name}>
                <div style={{ width: '500px', height: '500px', border: '1px solid black' }}>
                    父组件中定义的value:{name}
                    <Son />
                </div>
            </Provider>

        )
    }
}
