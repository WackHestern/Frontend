import React, { Component } from "react";
import {Navbar} from './../Common/Navbar/Navbar'
import {CashBalance} from './Components/CashBalance/CashBalance'

import './Portfolio.scss'

const links = {
  "Help": "help",
  "Install": "install",
  "Fund": "app.fund",
  "Portfolio": "app.portfolio"
}

export default class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <Navbar links={links}/>
        <div className="cardContainer">
          <CashBalance/>
        </div>
      </div>
    );
  }
}