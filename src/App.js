import React, { Component } from 'react';
import Footer from './Footer';
import Leftbar from './Leftbar';
import Subheading from './Subheading';
import Contact from './Contact';
import Main from './Main';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Leftbar />
          <div id="main">
            <Subheading />
            <Main />
            <Contact />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
