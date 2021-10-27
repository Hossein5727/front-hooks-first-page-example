import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/image/02.jpg'
import video1 from '../../assets/video/alpha.mov'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './ListItem.scss'

function ListItem({ index }) {

    const [like, setLike] = useState(false)
    const [disLike, setDisLike] = useState(false)

    const imageRef = useRef()
    const [isHoverd, setIsHoverd] = useState(false)

    // if (isHoverd) {
    // }
    return (
        <div className="listItem" onMouseEnter={() => setIsHoverd(true)} onMouseLeave={() => setIsHoverd(false)}
            style={{ left: isHoverd & index * 220 - 50 + index * 2.5 }}>
            <img src={img1} ref={imageRef} />
            {isHoverd && (
                <>
                    <video src={video1} loop autoPlay />
                    <div className="itemInfo">
                        <div className="icons">
                            <Link to="/watch" style={{ textDecoration: 'none', color: '#000' }}><div><PlayArrow /></div></Link>
                            <div> <Add /></div>
                            <div> <ThumbUpAltOutlined style={{ color: like ? 'red' : '#000' }} onClick={() => setLike(!like)} /></div>
                            <div> <ThumbDownAltOutlined style={{ color: disLike ? 'red' : '#000' }} onClick={() => setDisLike(!disLike)} /></div>
                        </div>
                    </div>
                </>
            )
            }
        </div >
    )
}

export default ListItem
