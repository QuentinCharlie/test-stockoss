import styled from 'styled-components';

const InputStyled = styled.input`

  font-size: 1.1em;
  width: 200px;
  height: 50px;
  padding: 1em;
  border: none;
  color: white;
  background-color: #2A4952;
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
`;


export default InputStyled;
