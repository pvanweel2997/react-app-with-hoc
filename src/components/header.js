import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends React.Component {
  state = { loggedIn: false };
  authButton() {
    if (this.props.authenticated) {
      return (
        <button onClick={() => this.props.authenticate(false)}>
          Sign out!
        </button>
      );
    } else {
      return (
        <button onClick={() => this.props.authenticate(true)}>Sign in!</button>
      );
    }
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Resources">Resources</Link>
          </li>
          <li className="nav-item">{this.authButton()}</li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
