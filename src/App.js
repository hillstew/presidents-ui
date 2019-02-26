import React, { Component } from 'react';
import './styles/App.css';
import './styles/CardContainer.css';
import { getPresidents, setLoading, setError } from './actions';
import { connect } from 'react-redux';
import CardContainer from './containers/CardContainer';

class App extends Component {
  async componentDidMount() {
    const { getPresidents, setLoading, setError } = this.props;
    const response = await fetch('http://localhost:3001/api/v1/presidents');
    const result = await response.json();
    getPresidents(result);
    setLoading(false);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
        {!isLoading && <CardContainer />}
        {isLoading && <div>loading</div>}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  error: state.hasErrored
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
