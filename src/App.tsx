import * as React from 'react';
import './App.scss';

import Day001 from './days/001/Day001';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Elana Kopelevich</h1>
          <h1>100 Days of UI</h1>
        </header>
        <main className="App-main">
          <Day001 />
        </main>
      </div>
    );
  }
}

export default App;
