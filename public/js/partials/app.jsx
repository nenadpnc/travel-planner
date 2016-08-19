import React from 'react'
import ReactDOM from 'react-dom'
import Header from './../header.jsx'

const App =  React.createClass({
  render() {
    return (
        <div>
          <Header />
          <div className="wrapper">
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
    )
  }
})
export default App;