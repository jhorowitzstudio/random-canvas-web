import React from 'react';
import Interface from './components/Interface';
import CanvasContainer from './components/CanvasContainer';

const styles = {
  App: {
    margin: 15
  }
};

function App() {
  return (
    <div style={styles.App} className="App">
      <header>
        <h1>Image Generator</h1>
      </header>
      <Interface />
      <CanvasContainer />
    </div>
  );
}

export default App;
