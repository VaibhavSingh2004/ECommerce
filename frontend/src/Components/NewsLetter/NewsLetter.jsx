import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers on your E-mail</h1>
        <p>Subscribe to our newsletter</p>
        <div>
            <input type="email" placeholder='your Email id' />
             <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter