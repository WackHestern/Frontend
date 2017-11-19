import React, { Component } from 'react';
import './CurrentStocks.scss';
import {Button} from '../../../Common/Button/Button.jsx'

const _ = require('lodash');
const axios = require('axios');

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class CurrentStocks extends Component {

  constructor() {
    super();
    this.state ={
      currentStocks: <i className="fa fa-cog fa-spin fa-3x fa-fw" ></i>
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
      url: proxyurl + 'https://investeon.herokuapp.com/stocks/current',
    })
      .then((res) => {
        let data = res.data.message;
        const ret = _.map(Object.keys(data), (stock) => {
          return <div> {stock}:{data[stock]} </div>
        })
        this.setState({currentStocks: ret})
    });
  }

  componentDidMount(){
    return axios({
      method:'get',
      url: proxyurl + 'https://investeon.herokuapp.com/stocks/current',
    })
      .then((res) => {
        let data = res.data.message;
        const ret = _.map(Object.keys(data), (stock) => {
          return <div> {stock}:{data[stock]} </div>
        })
        this.setState({currentStocks: ret})
    });
  }

  render() {
    return (
      <div className="CurrentStocks">
        <div className="headerboi">Current Stocks</div>
        {this.state.currentStocks}
      </div>
    );
  }
}