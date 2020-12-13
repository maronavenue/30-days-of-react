import React, { Component } from 'react';
import './App.css';
import Profile from './Profile/Profile';

class App extends Component {
  state = {
    profiles: [
      {name: 'Maron', gender: 'Male', job: 'Software Engineer'},
      {name: 'Micah', gender: 'Male', job: 'Multimedia Artist'},
      {name: 'Wiona', gender: 'Female', job: 'Risk Operations Analyst'},
      {name: 'Joshua', gender: 'Male', job: 'Student'}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      profiles: [
        {name: event.target.value, gender: 'Male', job: 'Software Engineer'},
        {name: 'Micah', gender: 'Male', job: 'Multimedia Artist'},
        {name: 'Wiona', gender: 'Female', job: 'Risk Operations Analyst'},
        {name: 'Joshua', gender: 'Male', job: 'Student'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Profile
          name={this.state.profiles[0].name}
          gender={this.state.profiles[0].gender}
          job={this.state.profiles[0].job}
          changed={this.nameChangeHandler}/>
        <Profile
          name={this.state.profiles[1].name}
          gender={this.state.profiles[1].gender}
          job={this.state.profiles[1].job}
          changed={this.nameChangeHandler}/>
        <Profile
          name={this.state.profiles[2].name}
          gender={this.state.profiles[2].gender}
          job={this.state.profiles[2].job}
          changed={this.nameChangeHandler}/>
      </div>
    );
  }
}

export default App;
