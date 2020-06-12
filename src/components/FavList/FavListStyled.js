import styled from 'styled-components';

const FavListStyled = styled.div`

  width: 235px;
  color: #2A4952;
  margin: .5em 0;
  .favorite-item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 40%;
      text-align: left;
    }
    .fav-clear-button {
      height: 20px;
      width: 20px;
      border: 0;
      border-radius: 5px;
      color: white;
      background-color: #FF4136;
      padding: 2px;
    }
  }
`;


export default FavListStyled;
