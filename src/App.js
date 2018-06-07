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
                    this.setState({[event.target.name]: event.target.value
                  });
  }

  handleClick (event) {
    let user = this.state.username
    let pass = this.state.password

    event.preventDefault()

    localStorage.setItem('username', user)
    localStorage.setItem('password', pass)

    request
      .get("http://localhost:8000/contacts")
      .auth((localStorage.getItem('username')),(localStorage.getItem('password')))
      .then(
        (result) => {
          this.setState({
            contacts: result.body
          })
        }
      )
    }

    arraytoDisplay() {
      let info = this.state.contacts; 
      let newArray = info.map((contact, id) => (
        <div className="contact" key={id}>
        <div>Name: {contact.name}</div>
        <div>Email: {contact.email}</div>
        <div>Phone: {contact.phone}</div>
        <div>Address: {contact.address}</div>
        <div>Birthday: {contact.birthday}</div>
        <div>Company: {contact.company}</div>
        <div>Title: {contact.title}</div>
        <hr/>
        </div>))
        return newArray
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
            <hr/>
            <div className="results" type="text">{this.arraytoDisplay()}</div>
    </div>
    );
  }
}
export default App
