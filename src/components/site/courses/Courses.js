import React from 'react'
import Course from './Course'

import './Courses.scss'

function Courses() {
    return (
        <div className="courses">

            <div className="title">
                <img src="https://fronthooks.ir/images/front-course-title.svg" />
            </div>

            <Course />
        </div>
    )
}

export default Courses
