// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import { capitalize } from 'src/utils/functions';
import shelves from 'src/utils/shelves';
import MapStyled from './MapStyled';

// == Composant
const Map = ({
  inputValue,
  shelf,
}) => (
  <MapStyled>
    <span className="door" />
    <div className="map">
      {shelves.map((shelfId) => (
        <div className={`box ${shelf.position === shelfId && inputValue.length === 5 ? 'targetedShelf' : ''}`}>{capitalize(shelfId)}</div>
      ))}
    </div>
  </MapStyled>
);

Map.propTypes = {
  inputValue: PropTypes.string.isRequired,
  shelf: PropTypes.object.isRequired,
};

// == Export
export default Map;
