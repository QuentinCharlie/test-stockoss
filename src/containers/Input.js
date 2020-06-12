import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Input from 'src/components/Input';

// Action Creators
import {
  changeInputValue,
  changeShelf,
  changeIsAlreadyFav,
} from 'src/actions/map';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  inputValue: state.map.inputValue,
  isAlreadyFav: state.map.isAlreadyFav,
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
  changeIsAlreadyFav: () => {
    dispatch(changeIsAlreadyFav());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;
