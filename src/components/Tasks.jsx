import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    // if (this.props.id) {
    //   fetch('//crm.loc/api?__f=' + this.props.f + "&id=" + this.props.id)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //         tasks: data
    //       })
    //     });
    // } else {
    //   fetch('//crm.loc/api?__f=' + this.props.f)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //         tasks: data
    //       })
    //     });
    // }

    this.setState({
      tasks: [
        {
          id: "1",
          title: "test",
          description: "description"
        },
        {
          id: "1",
          title: "test",
          description: "description"
        },
        {
          id: "1",
          title: "test",
          description: "description"
        }
      ]
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.tasks.map((task, i) => {
            return (
              <div className="col-lg-12" key={i}>
                <Link to={"/task/" + task.id} >
                <div className="app__project--item">
                  <p className="item__title">{task.title}</p>
                  <p className="item__description">{task.description}</p>
                </div>
                </Link>
              </div>
            )
          })}
        </div>
        <Link to="/create/task"><span className="create_btn"></span></Link>
      </div>
    )
  }
}

export default Projects;