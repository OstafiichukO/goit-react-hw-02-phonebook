import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  handlleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    const { onSubmit } = this.props;
    onSubmit(id, name, number);
    this.reset();
  };
  render() {
    const { name, number } = this.state;
    const { handlleChange, handlleSubmit } = this;
    return (
      <>
        <form onSubmit={handlleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handlleChange}
              value={name}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handlleChange}
              value={number}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};