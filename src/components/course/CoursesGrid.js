import React from 'react'
import {Grid, Responsive} from 'semantic-ui-react'
import Course from './Card'


var giveCourse= (nam, img,top, comp, mark, match)=>(
            
            <Course match={match}  name={nam} imgName={img} topics={top} completed={comp} marks={mark}/>
)

let CourseGrid = (props)=>{
    console.log(props.match)    
    return(
        <div center={'true'}  style={{padding:'10px', margin:'0 auto', width: '80vw', textAlign:'center'}}>
            <Responsive as={Grid}  verticalAlign='middle' columns={(window.innerWidth>=1000)? 4 : (window.innerWidth>=700)? 2:1}>
                <Grid.Column >
                { giveCourse("Mathematics" , "maths.jpg", 17, 0, 40, props.match)}
                </Grid.Column>
                <Grid.Column>
                { giveCourse("chem" , "physics.jpg", 15, 0, 40, props.match)}
                </Grid.Column>
                <Grid.Column >
                { giveCourse("Chemistry" , "chemistry.jpg", 10, 0, 20, props.match)}
                </Grid.Column>
                <Grid.Column>
                { giveCourse("English" , "english.jpg", 8, 0, 20, props.match)}
                </Grid.Column>
            </Responsive>
        </div>
    )
}
export default CourseGrid