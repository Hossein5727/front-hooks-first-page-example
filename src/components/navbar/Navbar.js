import { ArrowDropDown, NotificationsOutlined, Search } from '@material-ui/icons'
import { Notifications } from '@material-ui/icons'
import img1 from '../../assets/image/net.svg'
import React, { useState } from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'

function Navbar() {

    const [isScroled, setIsScroled] = useState(false)
    const [isAllowed, setIsAllowed] = useState(true)

    window.onscroll = () => {
        setIsScroled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    const handleAllow = () => {
        if (isAllowed) {
            setIsAllowed(false)
        }
        else {
            setIsAllowed(true)
        }
    }

    return (
        <header className={isScroled ? "navbarr scroled" : "navbarr"}>
            <div className="navv">
                <section className="left">
                    <div ><img className="master" src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" /></div>
                    <div className="list-wrapper">
                        <h4 className="list">HomePage</h4>
                        <h4 className="list">Series</h4>
                        <h4 className="list">Movies</h4>
                        <h4 className="list">New and Popular</h4>
                        <h4 className="list">My List</h4>
                    </div>
                </section>
                <section className="right">
                    <Search className="icon" />
                    <h1 className="icon">KId</h1>
                    {isAllowed ? <NotificationsOutlined onClick={handleAllow} className="icon notif" />
                        :
                        <Notifications onClick={handleAllow} className="icon notif" />
                    }
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmUOvofdKUdxOfLjwXsJiJYHt-yU0XFifxQ&usqp=CAU" className="pic-net" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <Link to="/register" style={{ textDecoration: 'none', color: '#fff' }}> <span className="option">Setting</span></Link>
                            <span className="option">Logout</span>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Navbar
