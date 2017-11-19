import React, { Component } from "react";
import {Navbar} from './../Common/Navbar/Navbar'
import {CashBalance} from './Components/CashBalance/CashBalance'
import {PortfolioBalance} from './Components/PortfolioBalance/PortfolioBalance'
import {CurrentStocks} from './Components/CurrentStocks/CurrentStocks'
import {PortfolioBal} from './Components/PortfolioBal/PortfolioBal'


import './Portfolio.scss'

const links = {
  "Help": "help",
  "Install": "install",
  "Fund": "app.fund",
  "Portfolio": "app.portfolio",
  "Trade": "app.trade"
}

export default class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <Navbar links={links}/>
        <div className="cardContainer">
          <PortfolioBalance/>
          <CashBalance/>
          <PortfolioBal/>
          <CurrentStocks/>
          
        </div>
      </div>
    );
  }
}