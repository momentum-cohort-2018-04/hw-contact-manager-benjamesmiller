import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import request from 'superagent';


class App extends Component {
  constructor () {
    super ()
    this.state = {
      Username: '',
      password: '',
    }
  }

  pullContacts () {
    request.get('http://localhost:8000/contacts')
  }

  render() {
    return (
    <div className="App">
          <header className="App-header">
            <h1 className="App-title">Contact Manager</h1>
          </header>
        <div className="sign-in">
            <div className="input-field">
                <label>Username:</label>
                <input type="text"/>
            </div>

            <div className="input-field">
                <label>Password:</label>
                <input type="password"/>
            </div>

            <div className="input-field">
                <label><input type="checkbox"/> Remember me</label>
            </div>
    </div>
    </div>
    );
  }
}

export default App;
