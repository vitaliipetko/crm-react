import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import config from './config.json';
import Navleft from './components/navLeft.component';
import Navtop from "./components/Nav-top.component";
import RouterService from './components/Router.component';

class App extends Component {

  render() {
    return (
      <div className="container">
          <Helmet>
            <title>{config.title}</title>
            <meta name="description" content="test" />
          </Helmet>
          <Navtop />
          <section className="app__content">
          <BrowserRouter>
            <div>
                <div className="app__left-menu">
                  <Navleft/>
                </div>
                <div className="app__main-content">
                  <RouterService />
                </div>
            </div>
          </BrowserRouter>
          </section>
      </div>
    );
  }
}


export default App;
