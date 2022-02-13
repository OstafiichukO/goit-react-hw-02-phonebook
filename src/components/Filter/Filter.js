// import PropTypes from 'prop-types';

const Filter = ({ onFilter, value }) => {
  return (
    <div>
      Find contacts by name
      <input type="text" onChange={onFilter} value={value} />
    </div>
  );
};

export default Filter;
