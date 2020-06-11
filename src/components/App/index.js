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
  favorites,
  changeInputValue,
  changeShelf,
  addToFavorites,
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

  const inputElement = document.querySelector('#object-id-input');
  const handleClear = () => {
    changeInputValue('');
    inputElement.focus();
  }

  const handleFav = () => {
    if (inputValue.length === 5 && favorites.some((favorite) => inputValue === favorite.id)) {
      // @todo trigger a message that explain it's already in favorites
      console.log('already in favs');
    }
    else if (inputValue.length === 5 && !favorites.some((favorite) => inputValue === favorite.id)) {
      addToFavorites();
      // @todo trigger something that show it's been favorited
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
          value={inputValue}
          onChange={handleChange}
        />
        <div className="buttons">
          <button className="button button-clear" onClick={handleClear}>&times;</button>
          <button className="button button-fav" onClick={handleFav}>&#10084;</button>
        </div>
      </div>
      <div className={classNames(cssInputInfo)} />

      <Map />
    </AppStyled>
  );
}

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  changeShelf: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
};

// == Export
export default App;
