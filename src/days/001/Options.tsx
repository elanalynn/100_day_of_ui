import * as React from 'react';
import './001.scss';

class Options extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <section>
            <button type="button">Sign Up</button>
            <button type="button">Login</button>
        </section>
      </div>
    );
  }
}

export default Options;
