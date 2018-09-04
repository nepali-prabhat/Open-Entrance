import React, { Component } from 'react'
import NavBar from './nav/Nav'
import CoursesGrid from './components/course/CoursesGrid'

import './styles/style.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {menuDisplay:'true', active:'mock'}
    this.handleClick = this.handleClick.bind(this)
    this.handleContainerClick = this.handleContainerClick.bind(this)
  } 

  handleClick(e){
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
      <div>
      <div className="navbar">
          <NavBar display={this.state.menuDisplay} active={this.state.active} onClick={this.handleClick}/>
      </div>
      <div className={"container " + move} onClick={this.handleContainerClick}>        

        <div className='courses'>
          <CoursesGrid/>
        </div>

      </div>
      </div>
    );
  }
}

export default App;
