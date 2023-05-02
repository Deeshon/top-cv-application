import { Component } from "react"

class Item extends Component {
    render() {
        return(
            <div className="item" style={{display: 'flex'}}>
                <div className="year">
                    <p>2015 - Present</p>
                </div>
                <div className="content">
                    <p style={{fontWeight: 'bold', lineHeight: '0.5px', marginTop: '28px'}}>Senoir Web Developer</p>
                    <p>Facebook Inc., Menlo Park</p>
                </div>
            </div>
        )
    }
}

export default Item