import React, { useState } from 'react';

import './App.css';
import { ExampleComponent } from './ExampleComponent';

function App() {
  let [ counter, setCounter ] = useState( 0 )

  return (
    <div className="App">
      <header className="App-header">
        <ExampleComponent 
          value={ counter }
          callback={ () => setCounter( counter + 1 ) }
        />
      </header>
    </div>
  );
}

export default App;
