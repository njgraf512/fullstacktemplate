import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="title">MERN-Stack Template</h1>
        {/* <br /> tags are not commonly used in production code. CSS margins/padding are more common. */}
        <br />
        <p>Happy coding!</p>
      </div>
    );
  }
}

export default App;
