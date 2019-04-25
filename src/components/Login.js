import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div>
        Login <input onChange={this.handleUsername} placeholder="Username" />
        <input
          type="password"
          onChange={this.handlePassword}
          placeholder="Password"
        />
        <h3>
          Don't have an account? <Link to="/register">Register</Link> Today!
        </h3>
      </div>
    );
  }
}

export default Login;
