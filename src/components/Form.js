import { Component } from "react";
import DescriptionForm from "./form/DescriptionForm";
import ExperinceForm from "./form/ExperinceForm";
import EducationForm from "./form/EducationForm";

class Form extends Component {

    render() {
        const {handleSubmit, handleExperinceSubmit, handleEducationSubmit} = this.props

        return(
            <div className="form-container">
                <DescriptionForm handleSubmit={handleSubmit} />
                <ExperinceForm handleExperinceSubmit={handleExperinceSubmit} />
                <EducationForm handleEducationSubmit={handleEducationSubmit} />
            </div>
        )
    }
}

export default Form