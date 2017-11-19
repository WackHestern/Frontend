import React, { Component } from 'react';
import './PortfolioBal.scss';
import {Button} from '../../../Common/Button/Button.jsx'

const _ = require('lodash');
const axios = require('axios');

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class PortfolioBal extends Component {

  constructor() {
    super();
    this.state ={
      balance: '',
      cashMoney: <i className="fa fa-cog fa-spin fa-3x fa-fw" ></i>
    }
    this.reRender=this.reRender.bind(this)
    this.update=this.update.bind(this)
    this.timeout;
    this.reRender()
  }

  reRender(){
    this.update()
    window.clearTimeout(this.timeout)
    this.timeout = window.setTimeout(this.reRender,2000);
  }

  update (){
    return axios({
      method:'get',
      url: proxyurl + 'https://investeon.herokuapp.com/stocks/portfoliovalue',
    })
      .then((res) => {
        this.setState({cashMoney: <div className="subtextboi">${Math.round(res.data.message*100.0)/100.0}</div>})
    });
  }

  componentDidMount(){
    return axios({
      method:'get',
      url: proxyurl + 'https://investeon.herokuapp.com/stocks/portfoliovalue',
    })
      .then((res) => {
        this.setState({cashMoney: <div className="subtextboi">${Math.round(res.data.message*100.0)/100.0}</div>})
    });
  }

  render() {
    return (
      <div className="PortfolioBal">
      <div className="headerboi">Portfolio Balance</div>
        {this.state.cashMoney}
        {/* <div className="subtextboi">${this.state.balance}</div> */}
      </div>
    );
  }
}