import React, { Component } from "react";

class Projects extends Component {

  state = {
    task: []
  }

  componentDidMount() {
    this.getTask();
  }

  getTask() {
    fetch('//crm.loc/api?__f=' + this.props.f + "&id=" + this.props.id)
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
        <div className="row">
          <div className="col-lg-12">
              <div className="app__project--item">
                <p className="item__title">{this.state.task.title}</p>
                <p className="item__description">{this.state.task.description}</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;