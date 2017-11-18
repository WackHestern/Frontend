import React, { Component } from "react";
import { browserHistory } from 'react-router';
import {Navbar} from './../Common/Navbar/Navbar'
import {Header} from './Components/Header/Header.jsx'

import './home.scss'

const links = {
  "Sign Up": "signup",
  "Help": "help",
  "Install": "install",
  "Sign In": "signin"
}

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <Navbar links={links}/>
        <Header/>
      </div>
    );
  }
}