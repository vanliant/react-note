import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Home from '../components/Home/index'
import About from '../components/About/index'
import More from '../components/More/index'

import '../css/router.css'

export default class index extends Component {

    state = {
        paramsId: 111,
        name: 'Mr wang',
        age: 18
    }

    render() {
        const { paramsId,name,age } = this.state
        return (
            <div>
                <header>
                    <Link className="linkItem" to={`/index/about/${paramsId}`}>About</Link>


                    <Link className="linkItem" to={{pathname:'/index/home',state:{id:paramsId,name:name,age:age}}}>Home</Link>


                    <Link className="linkItem" to={`/index/more?name=${name}&age=${age}`}>More</Link>
                </header>

                <div style={{ marginTop: '30px' }}>
                    <Switch>
                        <Route path="/index/about/:id" component={About} />
                        <Route path="/index/home" component={Home} />
                        <Route path="/index/more" component={More} />
                    </Switch>
                </div>
            </div>
        )
    }
}
