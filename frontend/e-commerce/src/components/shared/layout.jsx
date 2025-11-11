import React from 'react'
import Header from '../header/headers'
import Footer from '../footer/footer'
function Layout({children}) {
  return (
    <>
    <div className='layout'>
     <div className='header'><Header /></div>
     <main className='main-content'>
        {
            children
        }
     </main>
     <div className='footer'><Footer /></div>
    </div>
    </>

  )
}

export default Layout