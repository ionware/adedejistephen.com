import React from 'react'
import selfImg from '../assets/adedeji.png'

export default ({}) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={selfImg} />
      </div>
      <nav>
        <ul>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  )
}