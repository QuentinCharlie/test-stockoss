// == Import npm
import React from 'react';

// == Import
import findPosition from 'src/utils/StockossTest';
import AppStyled from './AppStyled';

// == Composant
const App = () => {
  // console.log(findPosition("dq324"));
  return (
    <AppStyled>
      <h1>Trouvez l'étagère d'un objet et son emplacement.</h1>

      <div className="input">
        <input
          id="object-id-input"
          placeholder="Id de l'objet"
          type="text"
        />
      </div>
      <div className="map-container">
        <span className="door"/>
        <div className="map">
          <div className="box box-A0">A0</div>
          <div className="box box-A1">A1</div>
          <div className="box box-A2">A2</div>
          <div className="box box-A3">A3</div>
          <div className="box box-A4">A4</div>
          <div className="box box-A5">A5</div>
          <div className="box box-B0">B0</div>
          <div className="box box-B1">B1</div>
          <div className="box box-B2">B2</div>
          <div className="box box-B3">B3</div>
          <div className="box box-B4">B4</div>
          <div className="box box-B5">B5</div>
          <div className="box box-C0">C0</div>
          <div className="box box-C1">C1</div>
          <div className="box box-C2">C2</div>
          <div className="box box-C3">C3</div>
          <div className="box box-C4">C4</div>
          <div className="box box-C5">C5</div>
          <div className="box box-D0">D0</div>
          <div className="box box-D1">D1</div>
          <div className="box box-D2">D2</div>
          <div className="box box-D3">D3</div>
          <div className="box box-D4">D4</div>
          <div className="box box-D5">D5</div>
          <div className="box box-E0">E0</div>
          <div className="box box-E1">E1</div>
          <div className="box box-E2">E2</div>
          <div className="box box-E3">E3</div>
          <div className="box box-E4">E4</div>
          <div className="box box-E5">E5</div>
        </div>
      </div>
    </AppStyled>
  );
}
// == Export
export default App;
