import React from 'react'
import Footer from './Footer'
import Header from './Header'
export default function Index({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
