import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import request from 'superagent';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      username: '',
      password: '',
      contacts: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

      handleChange(event) {
                    localStorage.setItem({[event.target.name]: event.target.value})
                    this.setState({[event.target.name]: event.target.value
                  });
  }

  handleClick (event) {
    event.preventDefault()
    
    request
      .get("http://localhost:8000/contacts")
      .auth( 'Vader', 'father')
      .then(
        (result) => {
          this.setState({
            contacts: result
          })
        }
      )
    }

  render () { 
    return (
    <div className="App">
          <header className="App-header">
            <h1 className="App-title">Contact Manager</h1>
          </header>
        <div className="sign-in">
            <div className="input-field">
                <label>Username:</label>
                <input className="user" type="text" name="username" onChange={this.handleChange} value={this.state.value}/>
            </div>

            <div className="input-field">
                <label>Password:</label>
                <input className="pass" type="password" name ="password" onChange={this.handleChange} value={this.state.value}/>
            </div>
            <div className="submit">
                <button type="button" className="button" onClick={this.handleClick}>Submit</button>
            </div>
            <div className="input-field">
                <label><input type="checkbox"/> Remember me</label>
            </div>
    </div>
    </div>
    );
  }
}
export default App
