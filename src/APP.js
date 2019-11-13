import React, { Component } from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import AppTab from './containers/AppTab'
// import Login from './containers/Login'


export default class APP extends Component {
    render() {
        return (
            <Router>
            <div>
                <div>
                    <div className="content">
                        <Switch>
                            <Route path='/' component={AppTab}/>
                            {/* <Route path='/login' component={Login}/> */}
                            <Redirect from='/*' to = '/'/>
                        </Switch>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}
