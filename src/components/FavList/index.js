// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import FavListStyled from './FavListStyled';

// == Composant
const App = ({
  inputValue,
  favorites,
  isAlreadyFav,
  changeIsAlreadyFav,
  changeFavsVisibility,
  removeFromFavs,
}) => {
  const handleFavClear = (e) => {
    const { id } = e.target.dataset;
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
  };

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <FavListStyled>
      { // Sorting favorites by alphabetical shelf order
        favorites.sort((a, b) => a.position.localeCompare(b.position)).map((fav) => (
          <div className="favorite-item" key={fav.id}>
            <span>{capitalize(fav.position)} - {fav.id}</span>
            <button
              type="button"
              className="fav-clear-button"
              onClick={handleFavClear}
              data-id={fav.id}
            >
              &times;
            </button>
          </div>
        ))
      }
    </FavListStyled>
  );
};

App.propTypes = {
  inputValue: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
  isAlreadyFav: PropTypes.bool.isRequired,
  changeIsAlreadyFav: PropTypes.func.isRequired,
  changeFavsVisibility: PropTypes.func.isRequired,
  removeFromFavs: PropTypes.func.isRequired,
};

// == Export
export default App;
