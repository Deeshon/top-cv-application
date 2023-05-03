import { Component } from "react";
import EducationItemForm from "./EducationItemForm";


class EducationForm extends Component {  
    render() {
        const {handleEducationSubmit} = this.props
        return(
            <div className="form-section" id='education-form'>
                <h3>Education</h3>
                <EducationItemForm handleEducationSubmit={handleEducationSubmit} />
            </div>
        )
    }
}

export default EducationForm