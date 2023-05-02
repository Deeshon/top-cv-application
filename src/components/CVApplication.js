import { Component } from "react";
import Header from './Header'
import Description from "./Description";
import Experince from "./Experince";
import Education from "./Education";
import PersonalDetails from "./PersonalDetails";

class CVApplication extends Component {
    render() {
        return(
            <div className="application-container">
                <Header />
                <div style={{display: 'flex', width: '100%', height: '84%'}}>
                    <div className="main-container">
                        <Description />
                        <Experince />
                        <Education />
                    </div>
                    <div className="sub-container">
                        <PersonalDetails />
                    </div>
                </div>
            </div>
        )
    }
}

export default CVApplication