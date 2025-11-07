import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='footer'>
       <p1>&copy; {year} Amulya Technologies</p1>
    </div>
  )
}

export default Footer