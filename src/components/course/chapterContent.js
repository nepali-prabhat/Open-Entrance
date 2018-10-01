import React from 'react'
import {Pagination, Segment} from 'semantic-ui-react'


var giveQuestion=(obj)=>(
    <Segment color='purple'>
            {obj.q}
            <br/>
            {obj.o1}
    </Segment>
)
class ChapterContent extends React.Component{
    constructor(props){
        super(props)
        this.state={currentPage:0, totalPages:0 }
        this.pageChange = this.pageChange.bind(this)
    }
    componentWillMount(){
        this.setState({currentPage:1, totalPages: pages.length})
    }
    pageChange(e, data){
         this.setState({currentPage:data.activePage})
    }
    render(){
        return(
            <div>
                {pages[this.state.currentPage-1].map(questionObject=> giveQuestion(questionObject))}
                <br/>
                <Pagination siblingRange={2} defaultActivePage={1} totalPages={this.state.totalPages} onPageChange={this.pageChange} />
            </div>
        )
    }
}
export default ChapterContent
var pages=[
    [
        {
            q: 'what is my kite?',
            a: 'babaji',
            o1: 'babaji',
            o2: 'pann',
            o3: '2 dharkae',
            o4: 'rato'
        },
        {
            q: 'how is my kite?',
            a: 'torn',
            o1: 'hurt',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        }
    ],
    [
        {
            q: 'how is my kite?',
            a: 'torn',
            o1: 'hurt',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'what is my kite?',
            a: 'babaji',
            o1: 'babaji',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'how is my kite?',
            a: 'torn',
            o1: 'hurt',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'what is my kite?',
            a: 'babaji',
            o1: 'babaji',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        }
    ],
    [
        {
            q: 'how is my kite?',
            a: 'torn',
            o1: 'hurt',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'what is my kite?',
            a: 'babaji',
            o1: 'babaji',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'how is my kite?',
            a: 'torn',
            o1: 'hurt',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'what is my kite?',
            a: 'babaji',
            o1: 'babaji',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'how is my kite?',
            a: 'torn',
            o1: 'hurt',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'what is my kite?',
            a: 'babaji',
            o1: 'babaji',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'how is my kite?',
            a: 'torn',
            o1: 'hurt',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        },
        {
            q: 'what is my kite?',
            a: 'babaji',
            o1: 'babaji',
            o2: 'emotional',
            o3: 'torn',
            o4: 'deep'
        }
    ]
]