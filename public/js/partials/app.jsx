import React from 'react';
import Header from './../components/Header.jsx';

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