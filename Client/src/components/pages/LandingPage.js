import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Candidate Form</h1>
            <p className="main-para text-center">Future is here</p>
            <div className="buttons text-center">
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Apply</span></button>
                </Link>
                
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "88vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}