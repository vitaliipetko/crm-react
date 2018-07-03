import React, { Component } from "react";

class Create extends Component {

  render() {
    return(
      <div className="container">
        <div className="app__create-form">
          <form>
            <label htmlFor="title">
              <input type="text" name="title" placeholder="title" />
            </label>
            <label htmlFor="description">
              <input type="text" name="description" placeholder="description" />
            </label>
            <label htmlFor="submit">
              <input type="submit" name="submit" value="create" />
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default Create;