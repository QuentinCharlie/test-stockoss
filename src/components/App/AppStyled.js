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
    input {
      font-size: 1.1em;
      width: 200px;
      height: 50px;
      padding: 1em;
      border: none;
      color: white;
      background-color:#2A4952;
      border-radius: 5px;
      text-align: center;
      ::placeholder {
        text-transform: uppercase;
        color: white;
        font-size: 0.8em;
        opacity: 0.6;
        margin: 0 auto;
        text-align: center;
      }
    }
    .buttons {
      height: 50px;
      width: 24px;
      margin: 0 .3em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .button {
        height: 24px;
        width: 24px;
        border: 0;
        border-radius: 5px;
        color: white;
      }
      .button-clear {
        background-color: #FF4136;
        font-size: 1.2em;
        padding: 2px;
      }
      .button-fav {
        background-color: #39CCCC ;  
        font-size: 1.05em;
        padding: 2px;
      }
    }
  }

  .input-info {
    width: 200px;
    height: 10px;
    margin: .5em 0 1em 0;
    font-size: .7em;
    font-style: italic;
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
`;


export default AppStyled;
