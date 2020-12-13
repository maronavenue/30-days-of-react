import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    usernames: [
    'hachiman',
    'yuigahama',
    'yukinoshita',
    'irohasu'
  ]}

  usernameChangeHandler = (event) => {
    this.setState({
      usernames: [
        event.target.value,
        'yuigahama',
        'yukinoshita',
        'irohasu'
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.usernames[0]}/>
        <UserInput changed={this.usernameChangeHandler} username={this.state.usernames[0]}/>
        <UserOutput username={this.state.usernames[1]}/>
        <UserOutput username={this.state.usernames[2]}/>
        <UserOutput username={this.state.usernames[3]}/>
      </div>
    );
  }
}

export default App;
