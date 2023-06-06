import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='wrapper'>
        <div className='wrapperleft'>
        <h1>Khana Khajana</h1>
        </div>
        <div className='wrapperright'>
            <ul>
                <Link to='/'>Home</Link>
                <li>Servies</li>
                <li>Contact Us</li>
            </ul>
        </div>
        

    </div>
  )
}

export default Header