import React, { Component } from "react";
import { Helmet } from "react-helmet";

import config from './../config.json';

class Projects extends Component {

  state = {
    task: {
      id: "1",
      title: "test",
      description: "description",
      project_title: "test"
    }
  }

  componentDidMount() {
    this.getTask();
  }

  getTask() {
    fetch(config.api + '/api?__f=' + this.props.f + "&id=" + this.props.id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          task: data
        })
      });
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>{config.title} | {this.state.task.title} - {this.state.task.project_title}</title>
        </Helmet>
        <div className="row">
          <div className="col-lg-12">
              <div className="app__task--item">
                <p className="item__title">{this.state.task.title}</p>
                <p className="project__title">{this.state.task.project_title}</p>
                <p className="item__description">{this.state.task.description}</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;