import React, {Component} from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name
    }
  }

  onChange = (e) => {
    this.setState({name: e.target.value})
  }

  render () {
    return (
      <div className='container'>
        <div className='title'>Hello, {this.state.name}</div>
        <div className='subtitle'>
          <input
            className='form-control'
            value={this.state.name}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}

App.defaultProps = {
  name: ''
}

export default App
