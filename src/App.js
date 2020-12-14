import React, { Component } from 'react';
import './App.css';
import Profile from './Profile/Profile';

class App extends Component {
  state = {
    profiles: [
      {id: '1', name: 'Maron', gender: 'Male', job: 'Software Engineer'},
      {id: '2', name: 'Micah', gender: 'Male', job: 'Multimedia Artist'},
      {id: '3', name: 'Wiona', gender: 'Female', job: 'Risk Operations Analyst'},
      {id: '4', name: 'Joshua', gender: 'Male', job: 'Student'}
    ],
    isToggled: true
  }

  nameChangeHandler = ( id, event ) => {
    console.log(event);
    console.log(id);
    const profileIndex = this.state.profiles.findIndex(( p ) => p.id === id);
    const profile = {
      ...this.state.profiles[profileIndex]
    };
    profile.name = event.target.value;

    const profiles = [...this.state.profiles];
    profiles[profileIndex] = profile;
    this.setState({profiles: profiles});
  }

  toggleProfilesHandler = () => {
    const isToggled = this.state.isToggled;
    this.setState({isToggled: !isToggled});
  }

  deleteProfileHandler = ( event, index ) => {
    const profiles = [...this.state.profiles];
    profiles.splice(index, 1);
    this.setState({profiles: profiles});
  }

  render() {
    const buttonStyle = {
      padding: '8px',
      margin: '20px 0px 3px 0px',
      border: '2px solid',
      borderColor: '#8B4513',
      backgroundColor: '#FAEBD7',
      fontWeight: 'bold',
      cursor: 'pointer'
    };

    let profiles = null;

    if (this.state.isToggled) {
      profiles = (
        <div>
          {
            this.state.profiles.map( (p, index) => {
              return (
                <Profile
                  name={p.name}
                  gender={p.gender}
                  job={p.job}
                  changed={this.nameChangeHandler.bind(this, p.id)}
                  click={ (event) => this.deleteProfileHandler(event, index)}
                  key={p.id}/>
              )
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <button
          style={buttonStyle}
          onClick={this.toggleProfilesHandler}>{this.state.isToggled ? "Show" : "Hide"} Profiles</button>
        <div>
          {profiles}
        </div>
      </div>
    );
  }
}

export default App;
