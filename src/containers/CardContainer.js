import React, { Component } from 'react';
import { connect } from 'react-redux';
const shortid = require('shortid');

export class CardContainer extends Component {
  render() {
    const { presidents } = this.props;
    return presidents.map(president => {
      const { number, president: name, birth_year, death_year, took_office, left_office, party } = president;
      return (
        <div className="CardContainer-card" key={shortid.generate()}>
          <p>Number: {number}</p>
          <p>Name: {name}</p>
          <p>Born: {birth_year}</p>
          <p>Died: {death_year}</p>
          <p>Took office: {took_office}</p>
          <p>Left office: {left_office}</p>
          <p>Party: {party}</p>
        </div>
      );
    });
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents
});

export default connect(mapStateToProps)(CardContainer);
