import $ from 'jquery'
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './nav/Nav'
import Home from './components/Home/home'
import CoursesGrid from './components/course/CoursesGrid'
import CourseContent from './components/course/Content'
import './styles/style.css'

const courseContent = ({match})=><CourseContent match={match}/>
const navRoutes=[
  {
    url:'/',
    exact:true,
    component:()=><Home/>
  },
  {
    url:'/courses',
    exact:true,
    component:({match})=><CoursesGrid match={match}/>
  },
  {
    url:'/mock-test',
    exact:true,
    component:() => <div><h1>start mock Test</h1></div>
  },
  {
    url:'/community-discussion',
    exact:true,
    component:()=> <div><h1>Community-discussion</h1></div>
  },
  {
    url:'/contact-us',
    exact:true,
    component:()=><div><h1>Contact us</h1></div>
  }
]
class App extends Component  {
  constructor(props){
    super(props)
    this.state= {menuDisplay:'', active:'mock'}
    this.handleClick = this.handleClick.bind(this)
    this.handleContainerClick = this.handleContainerClick.bind(this)
    this.handleScroll=this.handleScroll.bind(this)
    this.whenScrolled=this.whenScrolled.bind(this)
  }
  componentDidMount(){
    if($(window).width() >= 768){
      this.setState({menuDisplay:'true'});
      window.addEventListener('scroll', this.handleScroll);
    }else{
      this.setState({menuDisplay: 'false'})
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  //scrolling:
  whenScrolled(){
    if(window.scrollY > 5 && this.state.menuDisplay === 'true'){
      this.setState({menuDisplay:'false'})
   }
  //  if(window.scrollY < 5 && this.state.menuDisplay === 'false'){
  //     this.setState({menuDisplay:'true'})
  //  }
  }
  handleScroll(){
    $(window).scroll(
        this.whenScrolled        
    )
  }
  handleClick(){
    if(this.state.menuDisplay === 'true'){
      this.setState({menuDisplay:'false'});
    }else{
      this.setState({menuDisplay:'true'});
    }
  }
  handleContainerClick(){
    if(this.state.menuDisplay === 'true'){
      this.setState({menuDisplay:'false'});
    }
  }
  render() {
    var move = (this.state.menuDisplay === 'true')? " moveDown " : "";
    return (
      <Router>
        <div>
          <div className="navbar">
            <NavBar display={this.state.menuDisplay} active={this.state.active} onScroll={this.handleScroll} onClick={this.handleClick}/>
          </div>
          <div className= {"container " + move} onClick={this.handleContainerClick}>
            {navRoutes.map(route => <Route exact={route.exact} path={route.url} component={route.component} />)}
            <Route path='/courses/Mathematics/' component={courseContent}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;