import React from 'react'

import './style/sectionStyle.css'
import SectionLogo from './sectionLogo'
import StarterCourseGuide from './coursesSection'
import math from '../../../images/maths.jpg'
import chemistry from '../../../images/chemistry.jpg'
import physics from '../../../images/physics.jpg'
import english from '../../../images/english.jpg'

const courses ={
    maths:'we have lots of resources for learning maths course.we have lots of resources for learning maths course.we have lots of resources for learning maths course',
    chemistry:'we have lots of resources for learning chemistry course.we have lots of resources for learning maths course.we have lots of resources for learning maths course',
    physics: 'we have lots of resources for learning physics course.we have lots of resources for learning maths course.we have lots of resources for learning maths course',
    english: 'we have lots of resources for learning english course.we have lots of resources for learning maths course.we have lots of resources for learning maths course'
}
const SecSlogan=(props)=>{
    return(
        <div className="sectionTwo">
            <div className="proSlogan">
                <span>We provide you with <span>Resources</span>, you make the <span>Community</span> and <span>Effort.</span></span>
            </div>
        </div>
    )
}
class SectionGrid extends React.Component{
    render(){
        return(
            <div>
                <SectionLogo/>
                <SecSlogan/>
                <StarterCourseGuide courseName='Physics' courseDetails={courses.physics} imgSrc={physics} id={3}/>
                <StarterCourseGuide courseName='Chemistry' courseDetails={courses.chemistry} imgSrc={chemistry} id={2}/>
                <StarterCourseGuide courseName='Maths' courseDetails={courses.maths} imgSrc={math} id={1}/>
                <StarterCourseGuide courseName='English' courseDetails={courses.english} imgSrc={english} id={4}/>
                
            </div>
        )
    }
}
export default SectionGrid