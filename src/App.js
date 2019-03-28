import React, { Component } from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import MessagePopUp from './MessagePopUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProjectList />
      </div>
    );
  }
}

export default App;
