import React, { Component } from 'react';
import './PortfolioBalance.scss';
import {Button} from '../../../Common/Button/Button.jsx'

const _ = require('lodash');
const axios = require('axios');
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class PortfolioBalance extends Component {

  constructor() {
    super();
    this.state ={
      history: <i className="fa fa-cog fa-spin fa-3x fa-fw" ></i>
    }
    this.reRender=this.reRender.bind(this)
    this.update=this.update.bind(this)
    this.plotgraph=this.plotgraph.bind(this)
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

  plotgraph(xdata, ydata){
    let data = [
      {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
        x: xdata,     // more about "x": #scatter-x
        y: ydata,     // #scatter-y
        marker: {         // marker is an object, valid marker keys: #scatter-marker
          color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
        }
      },
    ];
    let layout = {                     // all "layout" attributes: #layout   // more about "layout.title": #layout-title
      xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
        title: 'Date'         // more about "layout.xaxis.title": #layout-xaxis-title
      },
      yaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
      title: 'Value'         // more about "layout.xaxis.title": #layout-xaxis-title
    },
      annotations: [            // all "annotation" attributes: #layout-annotations
      ]
    };
    let config = {
      showLink: false,
      displayModeBar: false
    };
    console.log('aaaaa')
    return (
      <PlotlyComponent className="whatever" data={data} layout={layout} config={config}/>
    );
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
          _.forEach(data[day], (stock) => {
            total += Object.values(stock)[0]
          });
          values.push(total)
        });

        return[days, values]
    })
    .then(([x, y]) => {
      this.setState({history: this.plotgraph(x,y)})
    })
  }

  render() {
    return (
      <div className="PortfolioBalance">
        <div className="headerboi">Portfolio Balance History</div>
        {this.state.history}
      </div>
    );
  }
}