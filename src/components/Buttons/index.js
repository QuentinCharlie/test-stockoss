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
    changeInputValue('');
    inputElement.focus();
    changeIsAlreadyFav();
  };

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
  };

  const handleFavListClick = () => {
    changeFavsVisibility();
  };

  return (
    <ButtonsStyled>
      <button type="button" className="button button-clear" onClick={handleClear}>&times;</button>
      <button type="button" className="button button-fav" onClick={handleFav}>&#10084;</button>
      {favorites.length > 0 && (
        <button type="button" className="button button-favlist" onClick={handleFavListClick}>
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
