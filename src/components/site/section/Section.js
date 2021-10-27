import React from 'react'
import img1 from '../../../assets/image/pp.jpg'
import Courses from '../courses/Courses'
import InfoFront from '../infoFront/InfoFront'
import ListSection from './ListSection'

import './Section.scss'

function Section() {
    return (
        <div className="section">

            <div className="top">
                <section>
                    <h2>دوره های آموزشی آکادمی فرانت هوکس</h2>
                    <h4>برنامه نویسی را سریع، آسان و پروژه محور یاد بگیرید</h4>
                    <button>مشاهده دوره ها</button>
                </section>
                <img src={img1} width="700px" height="560px" />
            </div>

            <ListSection />

            <Courses />

            <InfoFront />
        </div>
    )
}

export default Section
