import { Component } from "react";

class ItemForm extends Component {
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
        const {handleExperinceSubmit} = this.props
        const {items} = this.state
        return(
            <div>
                <form>
                    <input type="text" className="ex-inputs" id='maincontent' placeholder="Position"></input>
                    <input type="text" className="ex-inputs" id='subcontent' placeholder="Company"></input>
                    <input type="text" className="ex-inputs" id='city' placeholder="City"></input>
                    <input type="text" className="ex-inputs" id='from' placeholder="From"></input>
                    <input type="text" className="ex-inputs" id='to' placeholder="To"></input>
                    <input type="button" value='Submit' onClick={() => {
                        const item = {}
                        const inputList = document.querySelectorAll(".ex-inputs")
                        for (var i of inputList) {
                            item[i.id] = i.value
                        }
                        handleExperinceSubmit(item)   
                    }}></input>
                </form>
            </div>
        )
    }
}

export default ItemForm