import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import data from './data.json';
import './App.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Root extends Component {
    // returns a random array element
    randomItem(data){
        return data.splice(Math.floor(Math.random()*data.length), 1)[0];
    };
    componentWillMount() {
        var item = this.randomItem(data);
        this.setState(item);
    };
    
    render() {
        return (
          <MuiThemeProvider>
                <App img={this.state.img} opt1={this.state.options[0]} opt2={this.state.options[1]} opt3={this.state.options[2]} opt4={this.state.options[3]}/>
          </MuiThemeProvider>
        )
    };
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
