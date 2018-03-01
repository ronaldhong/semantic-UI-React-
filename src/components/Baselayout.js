import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import logo from "../logo.png";

class Baselayout extends Component {
  render() {
    return (
      <div className="App">
        <Menu>
          <div class="left menu">
            <img class="item" src={logo} alt="logo" height="100px;" width="200px;"/>
          </div>
          <div class="right menu ui segment">
            <a class="item active">Home</a>
            <a class="item">Gallery</a>
            <a class="item">Contact</a>
            <a class="item">About US</a>
            <a class="item">Pricing</a>
            <a class="item">Sign-in</a>
          </div>
        </Menu>



        {/* <div class="ui stackable menu">
          <div class="item">
            <img src={logo} />
          </div>
          <div class="right menu">
            <a class="item">Home</a>
            <a class="item">Gallery</a>
            <a class="item">Contact</a>
            <a class="item">About US</a>
            <a class="item">Pricing</a>
            <a class="item">Sign-in</a>
          </div>
        </div> */}
      </div>

    );
  }
}

export default Baselayout;
