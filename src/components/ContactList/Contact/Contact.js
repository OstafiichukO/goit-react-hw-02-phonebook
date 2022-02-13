import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contact extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id}>
              {name}: {number}
              <button type="button" name={id} onClick={onClick}>
                Delete
              </button>
            </li>
          );
        })}
      </>
    );
  }
}

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};