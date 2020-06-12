// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import
import Input from 'src/containers/Input';
import Buttons from 'src/containers/Buttons';
import FavList from 'src/containers/FavList';
import Map from 'src/containers/Map';
import FavMap from 'src/containers/FavMap';
import AppStyled from './AppStyled';

// == Composant
const App = ({
  inputValue,
  isAlreadyFav,
  areFavsVisible,
}) => {
  // display classNames based on conditions (bool)
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
        <Input />
        <Buttons />
      </div>
      <div className={classNames(cssInputInfo)} />

      {areFavsVisible && (
        <>
          <FavList />
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
  isAlreadyFav: PropTypes.bool.isRequired,
  areFavsVisible: PropTypes.bool.isRequired,
};

// == Export
export default App;
