import { Component } from "react";

class Header extends Component {
    render() {
        return(
            <div className="header">
                <h1 style={{fontSize: '40px', lineHeight: '10px'}}>John Doe</h1>
                <p style={{fontSize: '25px', fontStyle: 'italic'}}>Senoir Web Developer</p>
            </div>
        )
    }
}

export default Header