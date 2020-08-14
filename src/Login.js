import React, { Component } from 'react';
import { auth, createUserDocument } from './firebase';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log('error logging in', error);
      }
    }

    // this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form className="signup-login" onSubmit={this.handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
