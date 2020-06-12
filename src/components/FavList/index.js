// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { capitalize } from 'src/utils/functions';
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
    // getting item id
    const { id } = e.target.dataset;

    if (favorites.length === 1) {
      // checking if it's the last item in favorites
      // and if so after removing the item
      removeFromFavs(id);
      // then switch 'favorites list and map' view to regular view
      changeFavsVisibility();
      if (inputValue === id && isAlreadyFav) {
        changeIsAlreadyFav();
      }
    }
    else {
      removeFromFavs(id);
    }
  };

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
