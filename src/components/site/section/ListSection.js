import React from 'react'
import { infoList } from './infoList'

import './ListSection.scss'

function ListSection() {
    return (
        <div className="listSection">

            {infoList.map((item) => (
                <div key={item.id} className="main">
                    <img src={item.img} />
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                </div>
            ))}

        </div>
    )
}

export default ListSection
