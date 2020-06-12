import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import FavList from 'src/components/FavList';

// Action Creators
import {
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
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
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
const FavListContainer = connect(mapStateToProps, mapDispatchToProps)(FavList);

export default FavListContainer;
