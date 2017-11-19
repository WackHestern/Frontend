import React, { Component } from 'react';
import './Buy.scss';
import {Button} from '../../../Common/Button/Button.jsx'
import {TextInput} from '../../../Common/TextInput/TextInput'

const _ = require('lodash');
const axios = require('axios');

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class Buy extends Component {

  constructor() {
    super();
    this.state ={
      response: '',
      tickerInput:'',
      quantityInput:''
    }
    this.clicker = this.clicker.bind(this);
    this.tickerMonitor = this.tickerMonitor.bind(this);
    this.quantityMonitor = this.quantityMonitor.bind(this);
  }

  tickerMonitor(newValue){
    this.setState({tickerInput: newValue})
  }

  quantityMonitor(newValue){
    this.setState({quantityInput: newValue})
  }

  buy(stock, quantity){
    return axios({
      method:'post',
      url: proxyurl + 'https://investeon.herokuapp.com/stocks/buy',
      data: {
        stockName: stock,
        amount: quantity
      }
    })
      .then((res) => {
        this.setState({response: res.data.message})
        setTimeout(() => {
          this.setState({response: ''})

        }, 3000);
    });
  }

  clicker() {
    const ticker = this.state.tickerInput;
    const quantity = this.state.quantityInput;
    this.buy(ticker, quantity)
  }

  render() {

    return (
      <div className="Buy">
        {/* <div className="headerboi">Buy</div> */}
        <TextInput width="200px" type="text" placeholder="Stock Ticker" monitor={this.tickerMonitor}/>
        <div style={{height:"20px"}}></div>
        <TextInput width="200px" type="text" placeholder="Quantity" monitor={this.quantityMonitor}/>
        <div className="subtextboiyo">{this.state.response}</div>
        <div style={{height:"20px"}}></div>
        <Button width="220px" text="Buy" onClick={this.clicker}/>
      </div>
    );
  }
}