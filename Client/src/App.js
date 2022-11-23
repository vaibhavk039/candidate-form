import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'

import RegisterPage from './components/pages/RegisterPage'

import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    
                    <Route path="/register" component={ RegisterPage } />
                    
                    <Route path="/home" component={ HomePage } />
                </Switch>
                
            </div>
        </Router>
    )
}



