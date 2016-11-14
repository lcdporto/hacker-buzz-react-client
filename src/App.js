import React, { Component } from 'react';
import './App.css';

import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
    render() {
      return (
              <Card>
              <p><img src={this.props.img} alt="surprise" /></p>
              <FlatButton label={this.props.opt1} secondary={true} />
              <FlatButton label={this.props.opt2} secondary={true} />
              <FlatButton label={this.props.opt3} secondary={true} />
              <FlatButton label={this.props.opt4} secondary={true} />
              </Card>
    );
  }
}


export default App;
