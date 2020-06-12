import styled from 'styled-components';

const FavMapStyled = styled.div`

  padding: 20px;
  background-color: white;
  width: 500px;
  height: 500px;
  margin: 1em 0;
  border: #222222 2px solid;
  position: relative;
  .door {
    position: absolute;
    top: -2px; right: 0;
    width: 30px;
    border: white 2px solid;
    &::before {
      position: absolute;
      top: -1px; right: -1px;
      display: inline-block;
      content: "";
      background-color: #2A4952;
      height: 1px;
      width: 30px;
      transform-origin: top right;
      transform: rotate(300deg);
    }
  }
  .map {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    .box {
      width: calc(100% / 5 - 20px);
      height: calc(100% / 6 - 20px);
      color: white;
      background-color: #2A4952;
      border-right: white 1px solid;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .targetedShelf {
      background-color: #01FF70;
    }
  } 
`;


export default FavMapStyled;
