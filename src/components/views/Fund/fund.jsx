import React, { Component } from "react";
import {Navbar} from './../Common/Navbar/Navbar'

import './fund.scss'

const links = {
  "Help": "help",
  "Install": "install",
  "Fund": "app.fund",
  "Portfolio": "app.portfolio"
}

export default class Fund extends Component {
  render() {
    return (
      <div id="fund">
        <Navbar links={links}/>
      </div>
    );
  }
}