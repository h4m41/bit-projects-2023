import React from 'react'
import "./buttons.styles.css";
function Buttons  ({text, handleClick})  {
    
  return (
    <div className=''>
        <button className='small-button' onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Buttons