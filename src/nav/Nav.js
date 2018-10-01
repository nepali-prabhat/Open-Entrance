import React from 'react'
import {NavLink} from 'react-router-dom'

 import './style/navStyle.css'

class NavBar extends React.Component{   

    render(){
        let moreMenuClass= (this.props.display.toString() === 'true')? 'menuActive ':' ';
        let moreButtonClass= (this.props.display.toString() === 'true')? 'hamBurgerActive ': '';
        let animateOne = (this.props.display.toString() === 'true')? 'animate1':'';
        let animateTwo = (this.props.display.toString() === 'true')? 'animate2':'';
        let animateThree = (this.props.display.toString() === 'true')? 'animate3':'';
        let animateList=(n)=>(this.props.display.toString() === 'true')? 'active delay'+n.toString():'';
        
        return(
            <div className={'menua '+ moreMenuClass} id='mu'>
                <div className={'hamBurger ' + moreButtonClass} id='ham' onClick={this.props.onClick}>
                    <div className={animateOne} id='one'></div>
                    <div className={animateTwo} id='two'></div>
                    <div className={animateThree} id='three'></div>
                </div>
                <nav>
                    <ul>
                        <li className={animateList(1)} key='guide'>
                            <NavLink to='/' exact activeClassName='linkActive' onClick={this.props.onClick}><div>Starter <span>Guide</span></div></NavLink>
                        </li>
                        <li className={animateList(2)} key='courses'>
                            <NavLink to='/courses' activeClassName='linkActive' onClick={this.props.onClick}><div>Entrance <span>Courses</span></div></NavLink>
                        </li>
                        <li className={animateList(3)} key='mockTest'>
                            <NavLink to='/mock-test' activeClassName='linkActive' onClick={this.props.onClick}><div>Mock <span>Test</span></div></NavLink>
                        </li>
                        <li className={animateList(4)} key='discussion'>
                            <NavLink to='/community-discussion' activeClassName='linkActive' onClick={this.props.onClick}><div>Community <span>Discussion</span></div></NavLink>
                        </li>
                        <li className={animateList(5)} key='contact'>
                            <NavLink to='/contact-us' activeClassName='linkActive' onClick={this.props.onClick}><div>Contact <span>Information</span></div></NavLink>
                        </li>
                    </ul> 
                </nav>
            </div>
        );
    }
}

export default NavBar