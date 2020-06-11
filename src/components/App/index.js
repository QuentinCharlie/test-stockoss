// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Map from 'src/containers/Map';
import findShelf from 'src/utils/StockossTest';
import AppStyled from './AppStyled';

// == Composant
const App = ({
  inputValue,
  changeInputValue,
  changeShelf,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    changeInputValue(value);

    if (value.length === 5) {
      // console.log(findShelf(value));
      const shelf = findShelf(value);
      changeShelf(shelf);
    }
  }

  const cssInputInfo = {
    'input-info': true,
    'no-input': inputValue === '',
    'too-short': inputValue.length > 0 && inputValue.length < 5,
    'too-long': inputValue.length > 5,
  }
  return (
    <AppStyled>
      <h1>Trouvez l'étagère d'un objet et son emplacement.</h1>

      <div className="input">
        <input
          autoFocus
          id="object-id-input"
          placeholder="Id de l'objet"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className={classNames(cssInputInfo)} />

      <Map />
    </AppStyled>
  );
}

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

// == Export
export default App;
