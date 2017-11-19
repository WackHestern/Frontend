import React, { Component } from 'react';
import './ConfigTrade.scss';
import {Button} from '../../../Common/Button/Button.jsx'
import {TextInput} from '../../../Common/TextInput/TextInput'

const _ = require('lodash');
const axios = require('axios');

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class ConfigTrade extends Component {

  constructor() {
    super();
    this.state ={
      response: '',
      securityInput:'',
      principleInput:'',
    }
    this.clicker = this.clicker.bind(this);
    this.securityMonitor = this.securityMonitor.bind(this);
    this.principleMonitor = this.principleMonitor.bind(this);
  }

  securityMonitor(newValue){
    this.setState({securityInput: newValue})
  }

  principleMonitor(newValue){
    this.setState({principleInput: newValue})
  }

  clicker() {
    let security = this.state.securityInput
    security = security.split(',')
    security=_.map(security, (e)=> _.trim(e));
    const principle = this.state.principleInput;
    this.props.monitor(principle, security)
  }

  render() {

    return (
      <div className="ConfigTrade">
        <TextInput width="200px" type="text" placeholder="Securities" monitor={this.securityMonitor}/>
        <div style={{height:"20px"}}></div>
        <TextInput width="200px" type="text" placeholder="Principle" monitor={this.principleMonitor}/>
        <div className="subtextboiyo">{this.state.response}</div>
        <div style={{height:"20px"}}></div>
        <Button width="220px" text="Test" onClick={this.clicker}/>
      </div>
    );
  }
}