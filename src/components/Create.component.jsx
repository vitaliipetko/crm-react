import React, { Component } from "react";

import config from "./../config.json";

class Create extends Component {

  
  state = {};

  handleTitle(event) {
    let title;
    title = event.target.value;
    this.setState({
      title
    });
  }

  handleDescription(event) {
    let description;
    description = event.target.value;
    this.setState({
      description
    });
  }

  componentDidMount() {
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.setState({
      function: this.props.fun
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let data;
    data = this.state;
    fetch(config.api + '/api?__f=create&title=' + data.title + '&description=' + data.description);

  }

  render() {
    return(
      <div className="container">
        <div className="app__create-form">
          <form>
            <input type="text" name="title" placeholder="Title" onChange={this.handleTitle}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleDescription}/>
            <input type="submit" name="submit" value="create" onClick={this.onSubmit.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default Create;