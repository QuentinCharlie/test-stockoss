// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonsStyled from './ButtonsStyled';

// == Composant
const App = ({
  inputValue,
  favorites,
  isAlreadyFav,
  areFavsVisible,
  changeInputValue,
  addToFavorites,
  changeIsAlreadyFav,
  changeFavsVisibility,
}) => {
  const inputElement = document.querySelector('#object-id-input');
  const handleClear = () => {
    if (inputValue !== '') {
      changeInputValue('');
      inputElement.focus();
      if (isAlreadyFav) {
        changeIsAlreadyFav();
      }
    }
  };

  const handleFav = () => {
    if (
      // Checking if already in favorites
      inputValue.length === 5
      && favorites.some((favorite) => (
        inputValue === favorite.id
        && isAlreadyFav === false
      ))
    ) {
      changeIsAlreadyFav();
    }
    else if (
      inputValue.length === 5
      && !favorites.some((favorite) => inputValue === favorite.id)
    ) {
      addToFavorites();
    }
  };

  const handleFavListClick = () => {
    changeFavsVisibility();
  };

  return (
    <ButtonsStyled>
      {/* Clear button */}
      <button
        type="button"
        className="button button-clear"
        onClick={handleClear}
      >
        &times;
      </button>

      {/* Heart button */}
      <button
        type="button"
        className="button button-fav"
        onClick={handleFav}
      >
        &#10084;
      </button>

      {/*
        Favorite list / Plan simple button
        Only visible when at least 1 item is in favorites
      */}
      {favorites.length > 0 && (
        <button
          type="button"
          className="button button-favlist"
          onClick={handleFavListClick}
        >
          {!areFavsVisible
            ? `Liste favoris (${favorites.length})`
            : 'Plan simple'}
        </button>
      )}
    </ButtonsStyled>
  );
};

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  isAlreadyFav: PropTypes.bool.isRequired,
  areFavsVisible: PropTypes.bool.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  changeIsAlreadyFav: PropTypes.func.isRequired,
  changeFavsVisibility: PropTypes.func.isRequired,
};

// == Export
export default App;
