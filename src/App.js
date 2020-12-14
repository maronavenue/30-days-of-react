import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/Validation';
import CharComponent from './Char/Char';

class App extends Component {
  state = {
    inputString: ''
  }

  inputChangeHandler = ( event ) => {
    let inputString = this.state.inputString;
    inputString = event.target.value;
    this.setState({inputString: inputString});
  }

  deleteCharHandler = ( index) => {
    const inputString = this.state.inputString.split('');
    inputString.splice(index, 1);
    this.setState({inputString: inputString.join('')});
  }

  render() {
    console.log(typeof this.state.inputString);
    const inputStyle = {
      margin: '30px 0px 0px 0px',
      border: 'none',
      "border-bottom": '2px solid pink', // alternative syntax for exact css matching
      borderLeft: '2px solid pink', // i prefer this one for inline styling
      outline: 'none'
    }
    const outputStyle = {
      fontSize: '25px',
      display: 'block'
    }
    let chars = null;

    const inputString = this.state.inputString.split('');

    chars = (
      <div>
        {
          inputString.map(( c, index ) => {
            return <CharComponent
              value={c}
              click={() => this.deleteCharHandler(index)}
              key={c+index}/>
          })}
      </div>
    )

    return (
      <div className="App">
        <input style={inputStyle} onChange={this.inputChangeHandler} value={this.state.inputString}/>
        <code style={outputStyle}>{this.state.inputString.length}</code>
        <ValidationComponent length={this.state.inputString.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
