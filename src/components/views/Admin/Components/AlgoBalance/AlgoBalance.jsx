import React, { Component } from 'react';
import './AlgoBalance.scss';
import {Button} from '../../../Common/Button/Button.jsx'

const _ = require('lodash');
const axios = require('axios');
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class AlgoBalance extends Component {

  constructor() {
    super();
    this.state ={
      history: <i className="fa fa-cog fa-spin fa-3x fa-fw" ></i>,
      toRefresh: true
    }
    this.update=this.update.bind(this)
    this.plotgraph=this.plotgraph.bind(this)
    this.timeout;
    this.toRefresh=true;
  }

  update (){
    console.log(this.props.securities, this.props.principle, String(this.props.strategy))
    if(this.toRefresh){
      return axios({
        method:'post',
        url: proxyurl + 'https://momentumtrader.herokuapp.com/Tradium/projection',
        data: {
          securities: this.props.securities,
          // start_cash: parseInt(this.props.principle),
          start_cash: 100000,
          strategy: String(this.props.strategy),
        }
      })
        .then((res) => {
          const data = res.data.networth_over_time

          let days=[]
          for (let i=0;i<100;i++){
            days.push(i)
          }

          return[days, data];
      })
      .then(([x, y]) => {
        this.toRefresh=false
        this.setState({history: this.plotgraph(x,y), toRefresh:true})
      })
    }else {
      this.toRefresh=true;
    }
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
    return (
      <PlotlyComponent className="graph" data={data} layout={layout} config={config}/>
    );
  }

  // componentDidMount(){
  //   return axios({
  //     method:'post',
  //     url: proxyurl + 'https://momentumtrader.herokuapp.com/Tradium/projection',
  //     data: {
  //       securities: this.props.securities,
  //       start_cash: parseInt(this.props.principle),
  //       strategy: this.props.strategy,
  //     }
  //   })
  //     .then((res) => {
  //       const data = res.data.networth_over_time
  //       console.log(data)

  //       let days=[]
  //       for (let i=0;i<100;i++){
  //         days.push(i)
  //       }

  //       return[days, data];
  //   })
  //   .then(([x, y]) => {
  //     if(this.state.toRefresh){
  //       this.setState({history: this.plotgraph(x,y), toRefresh:false})
  //     }
  //   })
  // }

  render() {
    this.update();
    return (
      <div className="AlgoBalance">
        <div className="headerboi">{this.props.strategy} Algorithm History</div>
        {this.state.history}
      </div>
    );
  }
}