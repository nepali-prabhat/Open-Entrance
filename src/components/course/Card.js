import React from 'react'
import {Link,Route} from 'react-router-dom'
import {Card, Image, Progress, Button} from 'semantic-ui-react'


let Courses = (props)=> {
    var match = props.match;
    return(
    <Card>
        <Image size='medium' src={require('..//../images/'+ props.imgName)} />
        <Card.Content>
            <Card.Header textAlign="left">
                {props.name}
            </Card.Header>
            <Card.Meta textAlign='left'>
            Topics:{props.topics} , Marks:{props.marks} 
            </Card.Meta>
            <Card.Description>
                Completed: {props.completed} / {props.topics}
                <br/>
                <Progress value={props.completed} total={props.topics} progress='ratio' indicating />
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Link to={`${match.url}/${props.name}`}>
                <Button fluid color="green">
                    {(props.completed===0)? 'Start': 'Continue'}
                </Button>
            </Link> 
        </Card.Content>
    </Card>
    )
};
export default Courses;