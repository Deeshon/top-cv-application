import { Component } from "react";
import Item from "./Item";

class Experince extends Component {
    render() {
        const {experince} = this.props
        const result = []
         
        for (let i = 0; i < experince.length; i++) {
            result.push(<Item data={experince[i]} key={i} />)
            console.log(experince[i])
        }
        return(
            <div className="section" >
                <h3>Experince</h3>
                <hr></hr>
                {result}
            </div>
        )
    }
}


export default Experince