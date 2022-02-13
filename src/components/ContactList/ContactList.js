// import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
