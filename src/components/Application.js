import { Component } from "react";
import Header from './application/Header'
import Description from "./application/Description";
import Experince from "./application/Experince";
import Education from "./application/Education";
import PersonalDetails from "./application/PersonalDetails";

class Application extends Component {
    render() {
        const {content, experince, education} = this.props

        return(
            <div className="application-container">
                <Header content={content} />
                <div style={{display: 'flex', width: '100%', height: '84%'}}>
                    <div className="main-container">
                        <Description content={content} />
                        <Experince experince={experince} />
                        <Education education={education} />
                    </div>
                    <div className="sub-container">
                        <PersonalDetails content={content} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Application