import { Component } from "react";
import Item from "./Item";

class Education extends Component {
    render() {
        return(
            <div className="section">
                <h3>Education</h3>
                <hr></hr>
                <Item />
                <Item />
                <Item />
            </div>
        )
    }
} 

export default Education