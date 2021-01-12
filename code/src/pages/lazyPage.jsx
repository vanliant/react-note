import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'

import '../css/router.css'

import Loading from '../components/Lazy/Loading'
const Home = lazy(() => import('../components/Home/index'))
const About = lazy(() => import('../components/About/index'))

export default class lazyPage extends Component {
    render() {
        return (
            <div>
                <header>懒加载页面</header>
                <div>
                    <div>
                        <NavLink className="linkItem" to="/about">About</NavLink>
                        <NavLink className="linkItem" to="/home">Home</NavLink>
                    </div>
                    <div>
                    <Suspense fallback={<Loading/>}>
									{/* 注册路由 */}
                        <Route path="/about" component={About}/>
                        <Route path="/home" component={Home}/>
                    </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}
