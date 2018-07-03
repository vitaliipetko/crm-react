import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {

  state = {
    projects: [
      {
        id: '1',
        title: 'First project',
        description: 'description first project'
      },
      {
        id: '2',
        title: 'Second project',
        description: 'description second project'
      },
      {
        id: '3',
        title: 'Third project',
        description: 'description Third project'
      },
    ]
  }

  componentDidMount() {
    this.getProject();
  }

  getProject() {
    fetch('//crm.loc/api?__f=' + this.props.f)
      .then(response => response.json())
      .then(data => {
        this.setState({
          projects: data
        })
      });
  }

  render() {
    return(
      <div className="container">
        <span className="app__main-content--title">Projects<Link to="/create/project"><span className="create_btn"></span></Link></span> 
        <div className="row">
          {this.state.projects.map((project, i) => {
            return (
              <div className="col-lg-4 col-md-6" key={i}>
                <Link to={"/project/"+project.id}>
                <div className="app__project--item">
                  <p className="item__title">{project.title}</p>
                  <p className="item__description">{project.description}</p>
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