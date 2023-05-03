import { Component } from "react";

class Description extends Component {
    render() {
        var description = "";
        const {content} = this.props

        if (content[0]!== undefined) {
            description = content[0][0]['description']
        }else {
            
        }

        return(
            <div className="section">
                <h3>Description</h3>
                <hr></hr>
                <p style={{fontStyle: 'italic'}}>{description}</p>
            </div>
        )
    }
}

export default Description