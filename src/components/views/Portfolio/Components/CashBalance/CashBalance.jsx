import React, { Component } from 'react';
import './CashBalance.scss';
import {Button} from '../../../Common/Button/Button.jsx'

const _ = require('lodash');
const axios = require('axios');

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class CashBalance extends Component {

  constructor() {
    super();
    this.state ={
      balance: ''
    }
    this.reRender=this.reRender.bind(this)
    this.update=this.update.bind(this)
    this.cashMoney = <i className="fa fa-cog fa-spin fa-3x fa-fw" ></i>
    this.timeout;
    this.reRender()
  }

  reRender(){
    this.update()
    window.clearTimeout(this.timeout)
    this.timeout = window.setTimeout(this.reRender,1000);
  }

  update (){
    return axios({
      method:'get',
      url: proxyurl + 'https://investeon.herokuapp.com/user/availablefunds',
    })
      .then((res) => {
        this.setState({cashMoney: <div className="subtextboi">${Math.round(res.data.message*100.0)/100.0}</div>})
    });
  }

  componentDidMount(){
    return axios({
      method:'get',
      url: proxyurl + 'https://investeon.herokuapp.com/user/availablefunds',
    })
      .then((res) => {
        this.setState({cashMoney: <div className="subtextboi">${Math.round(res.data.message*100.0)/100.0}</div>})
    });
  }

  render() {
    return (
      <div className="CashBalance">
      <div className="headerboi">Cash Balance</div>
        {this.state.cashMoney}
        {/* <div className="subtextboi">${this.state.balance}</div> */}
      </div>
    );
  }
}