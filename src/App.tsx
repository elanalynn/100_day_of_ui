import * as React from 'react';
import './App.scss';

import Day001 from './components/001/Day001';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>100 Days of UI</h1>
        </header>
        <Day001 />
      </div>
    );
  }
}

export default App;
