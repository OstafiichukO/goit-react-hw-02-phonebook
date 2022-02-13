import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Contact from './Contact';

export default class ContactsList extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <>
        <ul>
          <Contact contacts={contacts} onClick={onClick} />
        </ul>
      </>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
