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
        this.setState({balance: Math.round(res.data.message*100.0)/100.0})
    });
  }

  componentDidMount(){
    return axios({
      method:'get',
      url: proxyurl + 'https://investeon.herokuapp.com/user/availablefunds',
    })
      .then((res) => {
        this.setState({balance: Math.round(res.data.message*100.0)/100.0})
    });
  }

  render() {
    return (
      <div className="CashBalance">
        <div className="headerboi">Available Funds</div>
        <div className="subtextboi">${this.state.balance}</div>
      </div>
    );
  }
}