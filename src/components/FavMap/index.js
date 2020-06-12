// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import FavMapStyled from './FavMapStyled';

// == Composant
const FavMap = ({
  favorites,
}) => (
  <FavMapStyled>
    <span className="door" />
    <div className="map">
      <div className={`box ${favorites.some((fav) => fav.position === 'a0') ? 'targetedShelf' : ''}`}>A0</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'a1') ? 'targetedShelf' : ''}`}>A1</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'a2') ? 'targetedShelf' : ''}`}>A2</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'a3') ? 'targetedShelf' : ''}`}>A3</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'a4') ? 'targetedShelf' : ''}`}>A4</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'a5') ? 'targetedShelf' : ''}`}>A5</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'b0') ? 'targetedShelf' : ''}`}>B0</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'b1') ? 'targetedShelf' : ''}`}>B1</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'b2') ? 'targetedShelf' : ''}`}>B2</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'b3') ? 'targetedShelf' : ''}`}>B3</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'b4') ? 'targetedShelf' : ''}`}>B4</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'b5') ? 'targetedShelf' : ''}`}>B5</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'c0') ? 'targetedShelf' : ''}`}>C0</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'c1') ? 'targetedShelf' : ''}`}>C1</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'c2') ? 'targetedShelf' : ''}`}>C2</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'c3') ? 'targetedShelf' : ''}`}>C3</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'c4') ? 'targetedShelf' : ''}`}>C4</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'c5') ? 'targetedShelf' : ''}`}>C5</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'd0') ? 'targetedShelf' : ''}`}>D0</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'd1') ? 'targetedShelf' : ''}`}>D1</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'd2') ? 'targetedShelf' : ''}`}>D2</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'd3') ? 'targetedShelf' : ''}`}>D3</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'd4') ? 'targetedShelf' : ''}`}>D4</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'd5') ? 'targetedShelf' : ''}`}>D5</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'e0') ? 'targetedShelf' : ''}`}>E0</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'e1') ? 'targetedShelf' : ''}`}>E1</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'e2') ? 'targetedShelf' : ''}`}>E2</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'e3') ? 'targetedShelf' : ''}`}>E3</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'e4') ? 'targetedShelf' : ''}`}>E4</div>
      <div className={`box ${favorites.some((fav) => fav.position === 'e5') ? 'targetedShelf' : ''}`}>E5</div>
    </div>
  </FavMapStyled>
);

FavMap.propTypes = {
  favorites: PropTypes.array.isRequired,
};

// == Export
export default FavMap;
