import React from 'react'
import Header from '../header/headers'
import Footer from '../footer/footer'
function Layout({children}) {
  return (
    <>
     <Header />
     <main>
        {
            children
        }
     </main>
     <Footer />
    </>

  )
}

export default Layout