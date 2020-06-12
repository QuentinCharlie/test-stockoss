// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import findShelf from 'src/utils/StockossTest';
import InputStyled from './InputStyled';

// == Composant
const Input = ({
  inputValue,
  isAlreadyFav,
  changeInputValue,
  changeShelf,
  changeIsAlreadyFav,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    changeInputValue(value);

    if (value.length === 5) {
      const shelf = findShelf(value);
      changeShelf(shelf);
    }
    if (isAlreadyFav === true) {
      changeIsAlreadyFav();
    }
  };
  return (
    <InputStyled
      autoFocus
      id="object-id-input"
      placeholder="Id de l'objet"
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  isAlreadyFav: PropTypes.bool.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  changeShelf: PropTypes.func.isRequired,
  changeIsAlreadyFav: PropTypes.func.isRequired,
};

// == Export
export default Input;
