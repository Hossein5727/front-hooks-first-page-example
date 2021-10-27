import React from 'react'

import './Course.scss'
import { listCourse } from './ListCourse'

function Course() {
    return (
        <div className="course">
            {listCourse.map((item) => (
                <div className="t">
                    <img src={item.img} />
                    <div className="mainCourse" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.info}</p>
                        <div className="btnPrice">
                            <button>ثبت نام دوره</button>
                            <p>تومان {item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Course
