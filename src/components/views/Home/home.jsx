import React, { Component } from "react";
import { browserHistory } from 'react-router';
import {Navbar} from './Components/Navbar/Navbar.jsx'
import {Header} from './Components/Header/Header.jsx'

import './home.scss'

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <Navbar/>
        <Header/>
      </div>
    );
  }
}