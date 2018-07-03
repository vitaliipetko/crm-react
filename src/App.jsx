import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav_left from './components/Nav-left';
import Nav_top from "./components/Nav-top";
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import Task from './components/Task';
import Create from './components/Create';

class App extends Component {

  render() {
    return (
      <div>
          <Nav_top />
          <section className="app__content">
          <BrowserRouter>
            <div className="container-full-width">
                <div className="app__left-menu">
                    <Nav_left/>
                </div>
                <div className="app__main-content">
                <Switch>
                  <Route exact path="/projects" render={() => (
                      <Projects f="projects" />
                    )}/>
                  <Route path="/tasks" render={() => (
                      <Tasks f="tasks" />
                    )}/>
                  <Route path="/task/:id" render={({ match }) => (
                      <Task f="task" id={match.params.id}/>
                    )}/>
                  <Route path="/project/:id" render={({ match }) => (
                      <Tasks f="tasks" id={match.params.id} />
                  )} />
                  <Route path="/create/:fun" render={({ match }) => (
                      <Create fun={match.params.fun} />
                  )} />
                </Switch>
                </div>
            </div>
          </BrowserRouter>
          </section>
      </div>
    );
  }
}


export default App;
