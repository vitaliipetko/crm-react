import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Projects from './Projects.component';
import Tasks from './Tasks.component';
import Task from './SingleTask.component';
import Create from './Create.component';

class RouterService extends Component {

  render() {
    return(
      <Switch>
        <Route exact path="/projects" render={() => (
          <Projects f="projects" />
        )} />
        <Route path="/tasks" render={() => (
          <Tasks f="tasks" />
        )} />
        <Route path="/task/:id" render={({ match }) => (
          <Task f="task" id={match.params.id} />
        )} />
        <Route path="/project/:id" render={({ match }) => (
          <Tasks f="tasks" id={match.params.id} />
        )} />
        <Route path="/create/:fun" render={({ match }) => (
          <Create fun={match.params.fun} />
        )} />
      </Switch>
    );
  }
}

export default RouterService;