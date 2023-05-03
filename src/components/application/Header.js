import { Component } from "react";

class Header extends Component {
    render() {
        var name;
        var job;
        const {content} = this.props

        if (content[0] !== undefined) {
            name = `${content[0][0]['first']} ${content[0][0]['last']}`
            job = content[0][0]['job']
        }

        return(
            <div className="header">
                <h1 style={{fontSize: '40px', lineHeight: '10px'}}>{name}</h1>
                <p style={{fontSize: '25px', fontStyle: 'italic'}}>{job}</p>
            </div>
        )
    }
}

export default Header