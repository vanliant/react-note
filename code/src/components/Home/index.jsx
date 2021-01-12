import React, { Component } from 'react'

export default class index extends Component {
    render() {
        console.log(this.props);
        const {id,name,age} = this.props.location.state || {}
        return (
            <div>
                home--接收state参数<br />
                id:{id}<br />
                age:{age}<br />
                name:{name}
            </div>
        )
    }
}
