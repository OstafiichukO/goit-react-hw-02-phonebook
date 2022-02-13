import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <>
        <label>
          Find contacts by name
          <input type="text" onChange={onChange} value={filter} />
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
