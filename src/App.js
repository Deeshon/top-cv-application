import { Component } from 'react';
import Application from './components/Application'
import Form from './components/Form'

class App extends Component {

  state = {
    content : [

    ],
    experince : [

    ],
    education: [

    ]
  }

  handleSubmit = (item) => {
    this.setState({content: [...this.state.content, item]})
    console.log(this.state.content)
  }

  handleExperinceSubmit = (item) => {
    this.setState({experince: [...this.state.experince, item]})
  }

  handleEducationSubmit = (item) => {
    this.setState({education: [...this.state.education, item]})
  }



  render() {
    const {content, experince, education} = this.state
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} handleExperinceSubmit={this.handleExperinceSubmit} handleEducationSubmit={this.handleEducationSubmit}/>
        <Application content={content} experince={experince} education={education} />
        <div style={{width: '80%', height: '100px'}}></div>
      </div>
    );
  }
} 

export default App;
