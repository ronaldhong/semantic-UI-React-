import React, { Component } from 'react';
import './App.css';
import {Menu} from 'semantic-ui-react';
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* //   <Menu>
      //     <Menu.Menu>
      //       <Menu.Item>
      //         <a href="">Menu</a>
      //       </Menu.Item>
      //       <Menu.icon>
      //         <img src={logo} alt="logo" size="large"/>
      //       </Menu.icon>
      //     </Menu.Menu>
      //     <Menu.Menu position="right">
      //       <Menu.Item>
      //         <a href="">Login</a>
      //       </Menu.Item>
      //       <Menu.Item>
      //         <a href="">Sign up</a>
      //       </Menu.Item>
      //     </Menu.Menu>
      //   </Menu> */}
        <div class="ui stackable menu">
          <div class="item">
            <img src={logo} />
          </div>
          <div class="right menu">
            <a class="item">Sign-in</a>
            <a class="item">Home</a>
            <a class="item">Gallery</a>
            <a class="item">Contact</a>
            <a class="item">About US</a>
            <a class="item">Pricing</a>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
