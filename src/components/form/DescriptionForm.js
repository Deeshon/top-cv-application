import { Component } from "react";

class DescriptionForm extends Component {
    render() {
        const {handleSubmit} = this.props

        return(
            <div className="form-section">
                <h3>Description</h3>
                <form>
                    <input className="inputs" type="text" id="first" placeholder="First Name"></input>
                    <br></br>
                    <input className="inputs" type="text" id="last" placeholder="Last Name"></input>
                    <br></br>
                    <input className="inputs" type="text" id="job" placeholder="Title"></input>
                    <br></br>
                    <input className="inputs" type="text" id="address" placeholder="Address"></input>
                    <br></br>
                    <input className="inputs" type="text" id="phone" placeholder="Phone Number"></input>
                    <br></br>
                    <input className="inputs" type="text" id="email" placeholder="Email"></input>
                    <br></br>
                    <textarea className="inputs" rows={7} cols={10} placeholder="Description" id="description"></textarea>
                    <input type="button" value='Submit' onClick={() => {
                        const description = {

                        }
                        const inputList = document.querySelectorAll(".inputs")
                        for (var i of inputList) {
                            description[i.id] = i.value
                        }
                        handleSubmit([description])                     
                    }}>
                    </input>
                </form>
            </div>
        )
    }
}

export default DescriptionForm