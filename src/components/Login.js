import React, { Component } from 'react'
import {TextField, Button, Container } from '@material-ui/core'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    document.cookie = "loggedIn=true; max-age=60*1000"

    window.location.replace("/")
  }

  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <p>Welcome, to become a small business admin sign in below.</p>
        <Container className="login"> 
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" /><br></br>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" /><br></br>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              >Login
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;