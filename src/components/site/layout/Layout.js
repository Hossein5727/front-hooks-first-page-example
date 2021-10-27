import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Layout({ children, className }) {
    return (
        <div className={className} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: '1' }}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
