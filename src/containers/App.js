import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/CardContainer.css';
import { getPresidents, setLoading, setError } from '../actions';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';

export class App extends Component {
  async componentDidMount() {
    const { getPresidents, setLoading, setError } = this.props;
    try {
      const response = await fetch('http://localhost:3001/api/v1/presidents');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const result = await response.json();
      getPresidents(result);
    } catch (error) {
      setError('There was an error fetching the needed data, try again');
    }
    setLoading(false);
  }

  render() {
    const { isLoading, hasErrored } = this.props;
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
        {!isLoading && <CardContainer />}
        {isLoading && <div>I am loading...</div>}
        {hasErrored !== '' && <div>{hasErrored}</div>}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = dispatch => ({
  getPresidents: presidents => dispatch(getPresidents(presidents)),
  setError: error => dispatch(setError(error)),
  setLoading: bool => dispatch(setLoading(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
