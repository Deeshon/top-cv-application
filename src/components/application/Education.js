import { Component } from "react";
import Item from "./Item";

class Education extends Component {
    render() {
        const {education} = this.props
        const result = []
        for (let i = 0; i < education.length; i++) {
            result.push(<Item data={education[i]} key={i} />)
        }
        return(
            <div className="section">
                <h3>Education</h3>
                <hr></hr>
                {result}
            </div>
        )
    }
} 

export default Education