import React, { Component } from 'react'
import LeftSide from '../components/Redux/LeftSide'
import RightSide from '../components/Redux/RightSide'
import '../css/redux.css'

import store from '../redux/store'
import { Provider } from 'react-redux'

export default class reduxTest extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h3>redux</h3>
                    <div className='container'>
                        <LeftSide />
                        <RightSide />
                    </div>
                </div>
            </Provider>
        )
    }
}
