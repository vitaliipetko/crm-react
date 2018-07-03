import React, { Component } from 'react';

import logo from './../assets/images/icons/logo.png';

class Nav_top extends Component {
  render() {
    return(
      <section className="app__top-menu">
       <img className="app__top-menu--logo" src={logo} alt="" />
          <span className="app__username">Root</span>
        <a href="/logout"><span className="app__top-menu--logout"></span></a>
      </section>
    );
  }
}

export default Nav_top;