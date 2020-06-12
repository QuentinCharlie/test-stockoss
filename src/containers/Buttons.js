import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Buttons from 'src/components/Buttons';

// Action Creators
import {
  changeInputValue,
  addToFavorites,
  changeIsAlreadyFav,
  changeFavsVisibility,
} from 'src/actions/map';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  inputValue: state.map.inputValue,
  favorites: state.map.favorites,
  isAlreadyFav: state.map.isAlreadyFav,
  areFavsVisible: state.map.areFavsVisible,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (inputValue) => {
    dispatch(changeInputValue(inputValue));
  },
  addToFavorites: () => {
    dispatch(addToFavorites());
  },
  changeIsAlreadyFav: () => {
    dispatch(changeIsAlreadyFav());
  },
  changeFavsVisibility: () => {
    dispatch(changeFavsVisibility());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const ButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(Buttons);

export default ButtonsContainer;
