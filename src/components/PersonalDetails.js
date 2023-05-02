 import { Component } from "react";

class PersonalDetails extends Component {
    render() {
        return(
            <div className="section">
                <div className="profile-img">
                    
                </div>
                <h3>Personal Details</h3>
                <hr></hr>
                <Detail title={'Address'} content={'Example Street 10'} />
                <Detail title={'Phone Number'} content={'+94 354 6243'} />
                <Detail title={'Email'} content={'john.doe@gmail.com'} />
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