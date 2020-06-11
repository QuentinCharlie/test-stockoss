import styled from 'styled-components';

const AppStyled = styled.div`

  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: auto;

  h1 {
    background-color: lightcoral;
    margin: 1em 0;
  }

  input {
    background-color: lightseagreen;

  }

  .map-container {
    padding: 20px;
    background-color: white;
    width: 500px;
    height: 500px;
    margin: 1em 0;
    border: black 1px solid;
    position: relative;
    .door {
      position: absolute;
      top: -1px; right: 0;
      width: 30px;
      border: white 1px solid;
      &::before {
        position: absolute;
        top: -1px; right: -1px;
        display: inline-block;
        content: "";
        background-color: black;
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
        background-color: lightgreen;
        border: black 1px solid;
      }
    }
  }

`;


export default AppStyled;
