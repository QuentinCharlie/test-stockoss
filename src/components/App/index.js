// == Import npm
import React from 'react';

// == Import
import './styles.css';
import findPosition from 'src/utils/StockossTest';

// == Composant
const App = () => {
  // console.log(findPosition("dq324"));
  return (
    <div className="app">
      <h1>Trouvez l'étagère d'un objet et son emplacement.</h1>

      <div className="input">
        <input
          id="object-id-input"
          placeholder="Id de l'objet"
          type="text"
        />
      </div>

      <div className="map">
        
      </div>
    </div>
  );
}
// == Export
export default App;
