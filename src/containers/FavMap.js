import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import FavMap from 'src/components/FavMap';

// Action Creators
import {} from 'src/actions/map';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  favorites: state.map.favorites,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const FavMapContainer = connect(mapStateToProps, mapDispatchToProps)(FavMap);

export default FavMapContainer;
