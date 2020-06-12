import styled from 'styled-components';

const ButtonsStyled = styled.div`

  height: 50px;
  width: 24px;
  margin: 0 .3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
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
  /* 
    This button is not flexed, absolute to Buttons' div
    Only visible when at least 1 item is in favorites
  */
  .button-favlist {
    width: 120px;
    font-weight: bold;
    background-color: #39CCCC ; 
    padding: 2px;
    position: absolute;
    bottom: 0; left: 28px;
  }
`;


export default ButtonsStyled;
