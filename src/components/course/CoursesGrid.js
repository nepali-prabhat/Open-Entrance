import React from 'react'
import {Grid, Responsive} from 'semantic-ui-react'
import Course from './Courses'



function giveCourse(nam, img,top, comp, mark){
    return(
        <Course name={nam} imgName={img} topics={top} completed={comp} marks={mark}/>
    )
}

let CourseGrid = ()=>{
    return(
        <div center  style={{padding:'10px', margin:'0 auto', width: '80vw', textAlign:'center'}}>
            <Responsive as={Grid}  verticalAlign='middle' columns={(window.innerWidth>=1000)? 4 : (window.innerWidth>=700)? 2:1}>
                <Grid.Column >
                { giveCourse("Mathematics" , "maths.jpg", 17, 4, 40)}
                </Grid.Column>
                <Grid.Column>
                { giveCourse(" Physics" , "physics.jpg", 15, 0, 40)}
                </Grid.Column>
                <Grid.Column >
                { giveCourse("Chemistry" , "chemistry.jpg", 10,9, 20)}
                </Grid.Column>
                <Grid.Column>
                { giveCourse("English" , "english.jpg", 8, 6, 20)}
                </Grid.Column>
            </Responsive>
        </div>
    )
}
export default CourseGrid