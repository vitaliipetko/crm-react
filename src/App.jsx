import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import config from './config.json';
import Nav_left from './components/Nav-left.component';
import Nav_top from "./components/Nav-top.component";
import RouterService from './components/Router.component';

class App extends Component {

  render() {
    return (
      <div className="container">
          <Helmet>
            <title>{config.title}</title>
          </Helmet>
          <Nav_top />
          <section className="app__content">
          <BrowserRouter>
            <div>
                <div className="app__left-menu">
                    <Nav_left/>
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
