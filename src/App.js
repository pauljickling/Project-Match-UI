import React, { Component } from 'react';
import Header from './Header';
/* import ProjectList from './ProjectList'; */
/* import MessagePopUp from './MessagePopUp'; */
import MockProjectList from './MockProjectList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MockProjectList />
      </div>
    );
  }
}

export default App;
