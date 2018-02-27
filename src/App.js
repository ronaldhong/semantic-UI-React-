import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="ui three buttons">
          <button class="ui active button">One</button>
          <button class="ui button">Two</button>
          <button class="ui button">Three</button>
        </div>
        <div class="ui padded segment">
          <button class="ui fluid primary button" role="button">Login</button>
          <div class="ui horizontal divider">Or</div>
          <button class="ui fluid secondary button" role="button">Sign Up Now</button>
        </div>
      </div>

    );
  }
}

export default App;
