import React, { Component } from 'react';
import {Card, CardHeader, CardTitle, CardText, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class statefulCard extends Component {
  constructor(){
    super();
    this.state ={
      octocat:{},
      text:''
    };

  }
  componentWillMount() {
    //called the first time the component is loaded right before the component is rendered
    let url = 'https://api.github.com/users/octocat';
    axios.get(url)
      .then(res => {
        this.setState({octocat: res.data});
      });
  }

  
  changeSection = () => {
      this.setState({
          text: this.refs.textInfo.value
      });
  }
 
  render() {
    return (
        <Card className="App-card">
            <CardHeader
            title="Octocat Avatar"
            subtitle="Octocat"
            avatar={this.state.octocat.avatar_url}
            />
            <CardTitle title="Octocat Profile" subtitle="Let's play around with the state!!" />
            <CardText>
               {this.state.text}          
            </CardText>
            <CardActions>
                <input type='text' placeholder='key in some text....' ref='textInfo' />
                <RaisedButton label="submit" secondary={true} onClick={this.changeSection}/>
            </CardActions>
        </Card>
    );
  }
}

export default statefulCard;
