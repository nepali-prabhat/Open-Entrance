import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

class SectionLogo extends React.Component{
    render(){
        return(
        <div>
            <div className="proSectionLogo">
                <div className="proInfo">
                        <h1>Open Entrance Preparation</h1>
                        <div className="proSlogan">
                            <span>Knowledge should be <span>collaborative</span> and <span>free!</span></span>
                        </div>
                        <div className="proButtonDiv">
                            <Button.Group>
                                <Button color='facebook'><Icon name='facebook' />Facebook</Button>
                                <Button color='google plus'><Icon name='google' />Google</Button>
                            </Button.Group>
                        </div>
                </div>  
                
            </div>
        </div>
        )
    }
}
export default SectionLogo