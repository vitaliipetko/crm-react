import React, { Component } from "react";
import { Link } from "react-router-dom";

import config from './../config.json';

class Projects extends Component {

  state = {
    tasks: [
      {
        id: "1",
        title: "test",
        description: "description"
      },
      {
        id: "2",
        title: "test",
        description: "description"
      },
      {
        id: "3",
        title: "test",
        description: "description"
      }
    ]
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    if (this.props.id) {
      fetch(config.api + '/api?__f=' + this.props.f + "&id=" + this.props.id)
        .then(response => response.json())
        .then(data => {
          this.setState({
            tasks: data
          })
        });
    } else {
      fetch(config.api + '/api?__f=' + this.props.f)
        .then(response => response.json())
        .then(data => {
          this.setState({
            tasks: data
          })
        });
    }
  }

  render() {
    let button;
    if (this.props.id) {
      button = <span className="app__main-content--title">Tasks<Link to={"/create/task/" + this.props.id}><span className="create_btn"></span></Link></span>
    } else {
      button = <span className="app__main-content--title">Tasks</span>
    }
    return (
      <div className="container">
        {button}
        <div className="row">
          {this.state.tasks.map((task, i) => {
            return (
              <div className="col-lg-12" key={i}>
                <Link to={"/task/" + task.id} >
                <div className="app__task--item">
                  <p className="item__title">{task.title}</p>
                  <p className="project__title">{task.project_title}</p>
                </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Projects;