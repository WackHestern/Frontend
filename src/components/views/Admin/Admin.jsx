import React, { Component } from "react";
import {Navbar} from './../Common/Navbar/Navbar'
import {AlgoBalance} from './Components/AlgoBalance/AlgoBalance'
import {ConfigTrade} from './Components/ConfigTrade/ConfigTrade'

import './Admin.scss'

const links = {
}

export default class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      securityInput: ["NVDA", "AMD", "VZ"],
      principleInput: 1000000,
      toRefresh: true
    }
    this.inputMonitor = this.inputMonitor.bind(this);
  }

  inputMonitor(newPrincipleValue,newSecurityValue){
    this.setState({
      principleInput: newPrincipleValue,
      securityInput: newSecurityValue,
      toRefresh: true
    })
  }

  render() {
    return (
      <div id="portfolio">
        <Navbar links={links}/>
        <div className="cardContainer">
          <ConfigTrade monitor={this.inputMonitor}/>
          <AlgoBalance securities={this.state.securityInput} principle={this.state.principleInput} strategy="momentum" toRefresh={this.state.toRefresh}/>
          <AlgoBalance securities={this.state.securityInput} principle={this.state.principleInput} strategy="random" toRefresh={this.state.toRefresh}/>
          <AlgoBalance securities={this.state.securityInput} principle={this.state.principleInput} strategy="passive" toRefresh={this.state.toRefresh}/>
        </div>
      </div>
    );
  }
}