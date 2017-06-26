import React, { Component } from 'react';

class Leftbar extends Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar"><img src="images/flower.png" alt="" /></a>
          {/*<h2><strong>I am Strata</strong></h2>*/}
          <ul>Web Development</ul>
          <ul>Project Management</ul>
        </div>
        <ul className="icons">
          <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
        </ul>
      </header>
    );
  }
}

export default Leftbar;