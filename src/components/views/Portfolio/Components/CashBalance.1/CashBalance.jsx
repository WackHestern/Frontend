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
      balance: '$'
    }
  }

  componentDidMount(){
    return axios({
      method:'get',
      url: proxyurl + 'https://investeon.herokuapp.com/user/availablefunds',
    })
      .then((res) => {
        this.setState({balance: res.data.availableFunds})
    });
  }

  render() {
    return (
      <div className="CashBalance">
        <div className="header">Available Funds</div>
        <div className="subtext">${this.state.balance}</div>
      </div>
    );
  }
}