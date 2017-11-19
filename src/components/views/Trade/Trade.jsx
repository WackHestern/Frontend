import React, { Component } from "react";
import {Navbar} from './../Common/Navbar/Navbar'
import {Buy} from './Components/Buy/Buy'
import {Sell} from './Components/Sell/Sell'
import {CashBalance} from '../Portfolio/Components/CashBalance/CashBalance'
import {CurrentStocks} from '../Portfolio/Components/CurrentStocks/CurrentStocks'
import {PortfolioBal} from '../Portfolio/Components/PortfolioBal/PortfolioBal'

import './Trade.scss'

const links = {
  "Help": "help",
  "Install": "install",
  "Fund": "app.fund",
  "Portfolio": "app.portfolio",
  "Trade": "app.trade"
};

export default class Trade extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <div id="trade">
        <Navbar links={links}/>
        <div className="cardContainer">
          <CashBalance/>
          <PortfolioBal/>
          <Buy/>
          <Sell/>
          <CurrentStocks/>
        </div>
      </div>
    );
  }
}