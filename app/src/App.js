import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state ={
      octocat:{}
    }
  }
  componentWillMount() {
    //called the first time the component is loaded right before the component is rendered
    let url = 'https://api.github.com/users/octocat';
    axios.get(url)
      .then(res => {
        this.setState({octocat: res.data});
      });
  }
 
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Card className="App-card">
          <CardHeader
            title="Octocat Avatar"
            subtitle="Octocat"
            avatar={this.state.octocat.avatar_url}
          />
          <CardTitle title="Octocat Profile" subtitle="Personal Info" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default App;
