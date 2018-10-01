import React from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import ChapterContent from './chapterContent'
import './courseStyle.css'

var mathRoutes=[
    {
        url:`/courses/Mathematics/`,
        exact : true,
        default:true,
        component : ()=><div>Intro to maths</div>
    },
    {
        url:`/courses/Mathematics/chapterOne`,
        exact:true,
        sidebar : 'Permutation and Combination',
        component : ()=><div><ChapterContent/></div>
    },
    {
        url:`/courses/Mathematics/chapterTwo`,
        exact:true,
        sidebar : 'Real and Imaginary Numbers',
        component : ()=><div>chapter 2 content boii</div>
    },
    {
        url:`/courses/Mathematics/chapterThree`,
        exact:true,
        sidebar : 'Derrivative',
        component : ()=><div>chapter 3 content boii</div>
    },
    {
        url:`/courses/Mathematics/chapterFour`,
        exact:true,
        sidebar : 'Calculus',
        component : ()=><div>chapter 4 content boii</div>
    }
]

class Maths extends React.Component{
    render(){
        return(
            <div className='contain'>
                <div className='sideBar'>
                    <ul>
                       { mathRoutes.map((link)=> link.default?  "" : <li><NavLink to={link.url}> {link.sidebar} </NavLink></li>)}
                    </ul>
                </div>
                <div className={`contentee`}>     
                <Switch>
                    {
                        mathRoutes.map((route)=><Route exact={route.exact} path={route.url} component={route.component} />)
                    }
                </Switch>
                </div>
            </div> 
        )
    }
}

export default Maths