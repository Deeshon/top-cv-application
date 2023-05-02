import { Component } from "react";
import Item from "./Item";

class Experince extends Component {
    render() {
        return(
            <div className="section" >
                <h3>Experince</h3>
                <hr></hr>
                <Item />
                <Item />
                <Item />
            </div>
        )
    }
}


export default Experince