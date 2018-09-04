import React from 'react'
import {Icon, Divider} from 'semantic-ui-react'

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
            <div className={'menu '+ moreMenuClass} >
                <div className={'hamBurger ' + moreButtonClass} onClick={this.props.onClick}>
                   <div className={animateOne} id='one'></div>
                   <div className={animateTwo} id='two'></div>
                   <div className={animateThree} id='three'></div>
                </div>
                <nav>
                    <ul>
                        <li className={animateList(1) + ' linkActive '} key='guide'> <a href="#"><div>Starter <span>Guide</span></div></a></li>
                        <li className={animateList(2)} key='courses'> <a href="#"><div>Entrance <span>Courses</span></div></a></li>
                        <li className={animateList(3)} key='mockTest'> <a href="#"><div>Mock <span>Test</span></div></a></li>
                        <li className={animateList(4)} key='discussion'> <a href="#"><div>Community <span>Discussion</span></div></a></li>
                        <li className={animateList(5)} key='contact'> <a href="#"><div>Contact <span>Information</span></div></a></li>
                    </ul> 
                </nav>
            </div>
        );
    }
}

export default NavBar