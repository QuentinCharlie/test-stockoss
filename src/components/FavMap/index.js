// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { capitalize } from 'src/utils/functions';
import shelves from 'src/utils/shelves';
import FavMapStyled from './FavMapStyled';

// == Composant
const FavMap = ({
  favorites,
}) => (
  <FavMapStyled>
    <span className="door" />
    <div className="map">
      {shelves.map((shelfId) => (
        <div className={`box ${favorites.some((fav) => fav.position === shelfId) ? 'targetedShelf' : ''}`}>
          {capitalize(shelfId)}
        </div>
      ))}
    </div>
  </FavMapStyled>
);

FavMap.propTypes = {
  favorites: PropTypes.array.isRequired,
};

// == Export
export default FavMap;
