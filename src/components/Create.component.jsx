import React, { Component } from "react";

class Create extends Component {

  state = {};

  componentDidMount() {
    this.setState({
      function: this.props.fun
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className="container">
        <div className="app__create-form">
          <form onSubmit={this.onSubmit}>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="description" placeholder="Description" />
            <input type="submit" name="submit" value="create"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Create;