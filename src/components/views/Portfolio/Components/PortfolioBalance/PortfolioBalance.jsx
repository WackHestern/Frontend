import React, { Component } from 'react';
import './PortfolioBalance.scss';
import {Button} from '../../../Common/Button/Button.jsx'

const _ = require('lodash');
const axios = require('axios');

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class PortfolioBalance extends Component {

  constructor() {
    super();
    this.state ={
      history: ''
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
  }

  componentDidMount(){
    return axios({
      method:'get',
      url: proxyurl + 'https://investeon.herokuapp.com/stocks/datahistory',
    })
      .then((res) => {
        let data = res.data.message
        let days = []
        let values = []

        _.forEach(Object.keys(data), (day) => {
          days.push(day)
          let total = 0
          _.forEach(stock, () => {
            total += Object.values(stock)[0]
          });
          values.push(total)
        });

        console.log(days, values)

        this.setState({history: res.data.message})
    });
  }

  render() {
    return (
      <div className="PortfolioBalance">
        <div className="headerboi">Portfolio Balance History</div>
      </div>
    );
  }
}