import { InfoOutlined, MoreOutlined, PlayArrow } from '@material-ui/icons'
import React, { useState } from 'react'
import './Featured.scss'
import img1 from '../../assets/image/walpaper.jpg'
import Select from 'react-select'


const options = [
    { label: 'Genre ', value: 'genre' },
    { label: 'Comedy ', value: 'comedy' },
    { label: 'Crime ', value: 'crime' },
    { label: 'Horror ', value: 'horror' },
    { label: 'Sports ', value: 'sports' },
    { label: 'Musicals ', value: 'musicals' },
    { label: 'Action ', value: 'action' },
    { label: 'Western ', value: 'western' },
    { label: 'Historical ', value: 'historical' },
    { label: 'Animation ', value: 'animation' },
    { label: 'Fantasy ', value: 'fantasy' },
    { label: 'Drama ', value: 'drama' },
]


function Featured({ category }) {

    const [value, setValue] = useState('')

    const renderCategory = () => {
        let renderValue = ""

        if (category) {
            renderValue = <div className="category">
                <span style={{ color: '#fff' }}>{category === "movie" ? "Movies" : "Series"}</span>
                <Select
                    value={value.label}
                    onChange={(e) => setValue(e.label)}
                    options={options}
                    className="dropdown"
                />
            </div>
        }

        return renderValue
    }

    return (
        <div className="featured">
            <div > {renderCategory()}</div>
            <img src={img1} />

            <div className="info">
                <h4 className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sunt, commodi nobis, quia voluptas
                    facere maxime laudantium quos nam
                    dolor, reprehenderit amet. Veniam ab temporibus praesentium tenetur quisquam deserunt fugit.
                </h4>
                <div className="buttons">
                    <button className="btn play">
                        <PlayArrow />
                        <h3>Play</h3>
                    </button>
                    <button className="btn more">
                        <InfoOutlined />
                        <h3>Info</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
