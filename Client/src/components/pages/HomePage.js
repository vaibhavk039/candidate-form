import React from 'react'
import { Link} from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'

export default function HomePage() {
    return (
        <header style={ HeaderStyle }>
           
        <div className='Home'>
               <h1>Thank you!!</h1>
               <p>Your response has been stored into our database</p>

                 <div className="text-center">
            
                      <Link to="/">
                        <button className="primary-button">Back to HomePage</button>
                      </Link>
                 </div>
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