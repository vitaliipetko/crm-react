import React, { Component } from "react";

class Create extends Component {

  state = [];

  componentDidMount() {
    this.setState({
      function: this.props.fun
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.function);
    // fetch('//crm.loc/api?__f=' + this.props.fun)
    //   .then(response => response.json())
    //   .then(data => {});
  }

  render() {
    return(
      <div className="container">
        <div className="app__create-form">
          <form onSubmit={this.onSubmit}>
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="description" placeholder="description" />
            <input type="submit" name="submit" value="create"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Create;