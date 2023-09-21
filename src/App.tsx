import React from 'react';

import './App.css';
import ExampleComponent from './ExampleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExampleComponent 
          value={ 1 }
          callback={ () => {} }
        />
      </header>
    </div>
  );
}

export default App;
