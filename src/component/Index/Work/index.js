import React , {Component} from 'react';
import { WorkSection , WorkTitle , Span , WorkPart , PartIcon , PartTitle , PartLine , PartDesc} from './style.js';
import axios from 'axios';

class Work extends Component {

    state = {
        works : []
    }

    componentDidMount() {
      axios.get('js/data.json').then( res => {this.setState({
         works :  res.data.works
      })})
    }

    render() {

        const {works} = this.state;
        const worksList = works.map( (workItem) => {
            return (
                <WorkPart first={workItem.id} key={workItem.id}>
                    <PartIcon  className={workItem.icon_name}></PartIcon>
                    <PartTitle >{workItem.title}</PartTitle>
                    <PartLine />
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </WorkPart>
            )
        })
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {worksList} 
                </div>
            </WorkSection>
        )
    }
    
}

export default Work