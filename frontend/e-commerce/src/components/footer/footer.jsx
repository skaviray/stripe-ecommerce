import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='footer-content'>
       <p>&copy; {year} Amulya Technologies</p>
    </div>
  )
}

export default Footer