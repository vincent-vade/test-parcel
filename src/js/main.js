import React from 'react'
import ReactDOM from 'react-dom'

import '../css/main.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        works
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
