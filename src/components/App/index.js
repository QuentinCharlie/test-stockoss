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
  areFavsVisible,
  changeInputValue,
  changeShelf,
  addToFavorites,
  changeIsAlreadyFav,
  changeFavsVisibility,
  removeFromFavs,
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

  const handleFavListClick = () => {
    changeFavsVisibility();
  }

  const handleFavClear = (e) => {
    const id = e.target.dataset.id;
    if (favorites.length === 1) {
      removeFromFavs(id);
      changeFavsVisibility();
      if (inputValue === id && isAlreadyFav) {
        changeIsAlreadyFav();
      }
    } 
    else {
      removeFromFavs(id);
    }
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const cssInputInfo = {
    'input-info': true,
    'no-input': inputValue === '',
    'too-short': inputValue.length > 0 && inputValue.length < 5,
    'too-long': inputValue.length > 5,
    'already-fav': isAlreadyFav && inputValue.length === 5,
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
            <button className="button button-favlist" onClick={handleFavListClick}>
              {!areFavsVisible
                ? `Liste favoris (${favorites.length})`
                : 'Plan simple'
              }
            </button>
          )}
        </div>
      </div>
      <div className={classNames(cssInputInfo)} />

      {areFavsVisible && (
        <>
          <div className="favorites-list">
            { // Sorting favorites by alphabetical shelf order
              favorites.sort((a, b) => a.position.localeCompare(b.position)).map((fav) => (
              <div className="favorite-item" key={fav.id}>
                <span>{capitalize(fav.position)} - {fav.id}</span>
                <button
                  className="fav-clear-button"
                  onClick={handleFavClear}
                  data-id={fav.id}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <FavMap />
        </>
      )}

      {!areFavsVisible && (
        <Map />
      )}
    </AppStyled>
  );
}

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  isAlreadyFav: PropTypes.bool.isRequired,
  areFavsVisible: PropTypes.bool.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  changeShelf: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  changeIsAlreadyFav: PropTypes.func.isRequired,
  changeFavsVisibility: PropTypes.func.isRequired,
  removeFromFavs: PropTypes.func.isRequired,
};

// == Export
export default App;
