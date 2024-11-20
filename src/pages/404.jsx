import React from 'react'
import fnf from '../images/solar-panel-with-green-plug.jpg'
import { Link } from 'react-router-dom'
import '../App.css'

function Fnf() {
  return (
    <div className='fnf'>
        <div className='fnf'>
            <h1>404</h1>
            <img src={fnf} alt="" />
            <p style={{fontSize:'32px',fontWeight:700}}>look like you’re lost</p>
            <p>Page you Looking for not available</p>
            <Link to='/'>go to home</Link>
        </div>
    </div>
  )
}

export default Fnf