import { Avatar } from '@material-ui/core'
import { HighlightOff, Menu, ShoppingCart } from '@material-ui/icons'
import React, { useState } from 'react'
import { ListNav } from './ListNav'

import './Navbar.scss'

function Navbar() {

    const [isResponsive, setIsResponsive] = useState(false)

    return (
        <div className="navbar">

            <div className="profile">
                <Avatar className="avatar" />
                <ShoppingCart className="shopingCard" />
            </div>

            <div className="navList">

                <div className={isResponsive ? "listBox responsive" : "listBox"}>
                    {ListNav.map((item, index) => (
                        <p key={index} className={item.class}>{item.name}</p>
                    ))}
                </div>

                <div className="imageBox">
                    <img src="https://fronthooks.ir/images/fh-logo.svg" />
                </div>
                
            </div>

            <div className="menuBox">
                <img src="https://fronthooks.ir/images/fh-logo.svg" className="img1" style={{ width: '25px', marginRight: '5px' }} />

                {isResponsive ? <HighlightOff className="menu" onClick={() => setIsResponsive(!isResponsive)} /> : <Menu className="menu" onClick={() => setIsResponsive(!isResponsive)} />}
            </div>
        </div>
    )
}

export default Navbar
