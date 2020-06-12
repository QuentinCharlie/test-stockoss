// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import MapStyled from './MapStyled';

// == Composant
const Map = ({
  inputValue,
  shelf,
}) => (
  <MapStyled>
    <span className="door" />
    <div className="map">
      {/* @todo try and find a better looking way to do this, too much repetition  */}
      <div className={`box ${shelf.position === 'a0' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>A0</div>
      <div className={`box ${shelf.position === 'a1' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>A1</div>
      <div className={`box ${shelf.position === 'a2' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>A2</div>
      <div className={`box ${shelf.position === 'a3' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>A3</div>
      <div className={`box ${shelf.position === 'a4' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>A4</div>
      <div className={`box ${shelf.position === 'a5' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>A5</div>
      <div className={`box ${shelf.position === 'b0' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>B0</div>
      <div className={`box ${shelf.position === 'b1' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>B1</div>
      <div className={`box ${shelf.position === 'b2' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>B2</div>
      <div className={`box ${shelf.position === 'b3' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>B3</div>
      <div className={`box ${shelf.position === 'b4' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>B4</div>
      <div className={`box ${shelf.position === 'b5' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>B5</div>
      <div className={`box ${shelf.position === 'c0' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>C0</div>
      <div className={`box ${shelf.position === 'c1' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>C1</div>
      <div className={`box ${shelf.position === 'c2' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>C2</div>
      <div className={`box ${shelf.position === 'c3' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>C3</div>
      <div className={`box ${shelf.position === 'c4' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>C4</div>
      <div className={`box ${shelf.position === 'c5' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>C5</div>
      <div className={`box ${shelf.position === 'd0' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>D0</div>
      <div className={`box ${shelf.position === 'd1' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>D1</div>
      <div className={`box ${shelf.position === 'd2' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>D2</div>
      <div className={`box ${shelf.position === 'd3' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>D3</div>
      <div className={`box ${shelf.position === 'd4' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>D4</div>
      <div className={`box ${shelf.position === 'd5' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>D5</div>
      <div className={`box ${shelf.position === 'e0' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>E0</div>
      <div className={`box ${shelf.position === 'e1' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>E1</div>
      <div className={`box ${shelf.position === 'e2' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>E2</div>
      <div className={`box ${shelf.position === 'e3' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>E3</div>
      <div className={`box ${shelf.position === 'e4' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>E4</div>
      <div className={`box ${shelf.position === 'e5' && inputValue.length === 5 ? 'targetedShelf' : ''}`}>E5</div>
    </div>
  </MapStyled>
);

Map.propTypes = {
  inputValue: PropTypes.string.isRequired,
  shelf: PropTypes.object.isRequired,
};

// == Export
export default Map;
