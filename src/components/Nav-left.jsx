import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Nav_left extends Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav_left;