// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Map from 'src/containers/Map';
import FavMap from 'src/containers/FavMap';
import findShelf from 'src/utils/StockossTest';
import AppStyled from './AppStyled';

// == Composant
const App = ({
  inputValue,
  favorites,
  isAlreadyFav,
  changeInputValue,
  changeShelf,
  addToFavorites,
  changeIsAlreadyFav,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    changeInputValue(value);

    if (value.length === 5) {
      const shelf = findShelf(value);
      changeShelf(shelf);
    }
    if (isAlreadyFav === true) {
      changeIsAlreadyFav();
    }
  }

  const inputElement = document.querySelector('#object-id-input');
  const handleClear = () => {
    changeInputValue('');
    inputElement.focus();
    changeIsAlreadyFav();
  }

  const handleFav = () => {
    if (
      inputValue.length === 5 &&
      favorites.some((favorite) => inputValue === favorite.id &&
      isAlreadyFav === false)
    ) {
      changeIsAlreadyFav();
    }
    else if (
    inputValue.length === 5 &&
    !favorites.some((favorite) => inputValue === favorite.id)
    ) {
      addToFavorites();
    }
  }

  const cssInputInfo = {
    'input-info': true,
    'no-input': inputValue === '',
    'too-short': inputValue.length > 0 && inputValue.length < 5,
    'too-long': inputValue.length > 5,
    'already-fav': isAlreadyFav,
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
          {favorites.length > 0 && (
            <button className="button button-favlist">Liste favoris ({favorites.length})</button>
          )}
        </div>
      </div>
      <div className={classNames(cssInputInfo)} />

      {favorites.length > 0 && (
        <>
          <div className="favorites-list">
            { // Sorting favorites by alphabetical shelf order
              favorites.sort((a, b) => a.position.localeCompare(b.position)).map((fav) => (
              <div className="favorite-item" key={fav.id}>{fav.position} - {fav.id}</div>
            ))}
          </div>
          <FavMap />
        </>
      )}

      <Map />
    </AppStyled>
  );
}

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  isAlreadyFav: PropTypes.bool.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  changeShelf: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  changeIsAlreadyFav: PropTypes.func.isRequired,
};

// == Export
export default App;
