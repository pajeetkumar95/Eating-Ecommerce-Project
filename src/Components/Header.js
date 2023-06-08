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
                <Link to='/service'>Services</Link>
                <Link to='/contactus'>Contact us</Link>
            </ul>
        </div>
        

    </div>
  )
}

export default Header