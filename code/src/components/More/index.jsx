import React, { Component } from 'react'
import qs from 'querystring'

export default class index extends Component {
    render() {
        console.log(this.props)

        const {search} = this.props.location
        const {name,age} = qs.parse(search.slice(1))
        
        return (
            <div>
                more--接收search参数<br />
                name:{name}<br />
                age:{age}
            </div>
        )
    }
}
