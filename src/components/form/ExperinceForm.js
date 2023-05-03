import { Component } from "react";
import ItemForm from "./ItemForm";


class ExperinceForm extends Component {  
    render() {
        const {handleExperinceSubmit} = this.props
        return(
            <div className="form-section" id='education-form'>
                <h3>Experince</h3>
                <ItemForm handleExperinceSubmit={handleExperinceSubmit} />
            </div>
        )
    }
}

export default ExperinceForm