import { Component } from "react"

class Item extends Component {
    render() {
        var from;
        var to;
        var mainContent;
        var subContent;
        const {data} = this.props    
        if (data !== undefined) {
            from = data['from']
            to = data['to']
            mainContent = data['maincontent']
            subContent = `${data['subcontent']}, ${data['city']}`
        }
        return(
            <div className="item" style={{display: 'flex'}}>
                <div className="year">
                    <p>{from} - {to}</p>
                </div>
                <div className="experince">
                    <p style={{fontWeight: 'bold', lineHeight: '0.5px', marginTop: '28px'}}>{mainContent}</p>
                    <p>{subContent}</p>
                </div>
            </div>
        )
    }
}

export default Item