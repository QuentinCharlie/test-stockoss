import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import App from 'src/components/App';

// Action Creators
import {
  changeInputValue,
  changeShelf,
  addToFavorites,
  changeIsAlreadyFav,
  changeFavsVisibility,
  removeFromFavs,
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
  changeShelf: (shelf) => {
    dispatch(changeShelf(shelf));
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
  removeFromFavs: (id) => {
    dispatch(removeFromFavs(id));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
