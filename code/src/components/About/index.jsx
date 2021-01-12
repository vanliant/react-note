import React, { Component } from 'react'

export default class index extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                about--接收params参数<br />
                this.props.match.params.id--&gt; {this.props.match.params.id}
            </div>
        )
    }
}
