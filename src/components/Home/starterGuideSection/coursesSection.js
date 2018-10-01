import React from 'react'
import {Grid, Header, Image} from 'semantic-ui-react'
import './style/courseSectionStyle.css'
// style={{background: this.props.id%2 === 0|1 ? '#b4bdd1':''}}
class StarterCourseGuide extends React.Component{
    render(){

        return (
            <div className='wrapper' >
                <div className='container' >
                    <div className={`first ${(this.props.id%2)===0? 'proOrderOne':'proOrderTwo'}`}>
                        <h1>{this.props.courseName}</h1>
                        <span>{this.props.courseDetails}</span>
                    </div>
                    <div className={`second ${(this.props.id%2)===0? 'proOrderTwo':'proOrderOne'}`}>
                        <Image src={this.props.imgSrc} size='medium'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default StarterCourseGuide