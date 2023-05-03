import { Component } from "react";

class EducationItemForm extends Component {
    state = {
        items: []
    }

    updateItems = (item) => {
        this.setState((prevState) => {
            return {
                items: [...prevState.items, item]
            }
        })
    }

    render() {
        const {handleEducationSubmit} = this.props
        const {items} = this.state
        return(
            <div>
                <form>
                    <input type="text" className="ed-inputs" id='maincontent' placeholder="Universty"></input>
                    <input type="text" className="ed-inputs" id='subcontent' placeholder="Degree"></input>
                    <input type="text" className="ed-inputs" id='city' placeholder="City"></input>
                    <input type="text" className="ed-inputs" id='from' placeholder="From"></input>
                    <input type="text" className="ed-inputs" id='to' placeholder="To"></input>
                    <input type="button" value='Submit' onClick={() => {
                        const item = {}
                        const inputList = document.querySelectorAll(".ed-inputs")
                        for (var i of inputList) {
                            item[i.id] = i.value
                        }
                        handleEducationSubmit(item)   
                    }}></input>
                </form>
            </div>
        )
    }
}

export default EducationItemForm