import styled from 'styled-components';

const AppStyled = styled.div`

  margin: 0 auto;
  text-align: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: auto;

  h1 {
    color: #2A4952;
    font-size: 1.2em;
    font-weight: bold;
    margin: 1em 0;
  }

  .input {
    display: flex;
    width: 235px;
  }

  .input-info {
    width: 200px;
    height: 10px;
    margin: .5em 0 1em 0;
    font-size: .7em;
    font-style: italic;
    /* 
    padding to center text below input
    because of buttons on the right
    calc : button-size + button-margin 
    */
    padding-right: calc(24px + .3em);
  }
  .no-input::before {
    color: #2A4952;
    content:"Entrez les 5 caractères de l'id"
  }
  .too-short::before {
    color: #FF851B ;
    content:"Il n'y a pas assez de caractères"
  }
  .too-long::before {
    color: #FF4136;
    content:"Il y a trop de caractères !"
  }
  .already-fav::before {
    color: #85144b;
    content:"Déjà en favoris !"
  }
`;


export default AppStyled;
