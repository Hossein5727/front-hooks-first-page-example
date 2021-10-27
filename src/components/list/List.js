import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import './List.scss'
import ListItem from '../listitem/ListItem'

function List() {

    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()

    const handleClick = (direction) => {
        const distnate = listRef.current.getBoundingClientRect().x

        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${220 + distnate}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setIsMoved(true)
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-220 + distnate}px)`
        }
    }

    return (
        <div className="list">
            <h3 className="listTitle">Continue to watch</h3>
            <div className="wrapper">
                <ArrowBackIosOutlined style={{ display: !isMoved && "none" }} className="slider left" onClick={() => handleClick('left')} />
                <ArrowForwardIosOutlined className="slider right" onClick={() => handleClick('right')} />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
            </div>
        </div>
    )
}

export default List
