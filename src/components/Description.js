import { Component } from "react";

class Description extends Component {
    render() {
        return(
            <div className="section">
                <h3>Description</h3>
                <hr></hr>
                <p style={{fontStyle: 'italic'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum tempus imperdiet nisl sed vestibulum.
                    Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, 
                    ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. 
                    Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.
                </p>
            </div>
        )
    }
}

export default Description