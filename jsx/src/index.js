// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
class App extends React.Component {
  render() {
    return <h1>Title</h1>
  };
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
