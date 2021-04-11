import React from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends React.Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // our component just got upated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  // return Authentication;
  const mapStateToProps = state => {
    return {
      authenticated: state.authenticated,
    };
  };

  return connect(mapStateToProps)(Authentication);
}
