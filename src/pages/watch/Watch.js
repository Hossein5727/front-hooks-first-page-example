import React from 'react'
import ReactPlayer from 'react-player'
import { ArrowBackOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import './Watch.scss'

function Watch() {
    return (
        <div className="watch">
            <div className="back" >
                <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                    <ArrowBackOutlined />
                    Home
                </Link>
            </div>
            <ReactPlayer width="84rem" height="37rem" style={{ margin: '1px' }} url='https://youtu.be/e0fy8aqe4Aw' />
        </div>
    )
}

export default Watch
