 import { Component } from "react";

class PersonalDetails extends Component {
    render() {
        var address;
        var phone;
        var email;
        const {content} = this.props

        if (content[0] !== undefined) {
            address = content[0][0]['address']
            phone = content[0][0]['phone']
            email = content[0][0]['email']
        }


        return(
            <div className="section">
                <div className="profile-img">
                    
                </div>
                <h3>Personal Details</h3>
                <hr></hr>
                <Detail title="Address" content={address} />
                <Detail title="Phone Number" content={phone} />
                <Detail title="Email" content={email} />
            </div>
        )
    }
}

function Detail({title, content}) {
    return(
        <div className="detail">
            <p style={{fontWeight: 'bold', lineHeight: '0px', paddingTop: '10px'}}>{title}</p>
            <p>{content}</p>
        </div>
    )
}

export default PersonalDetails