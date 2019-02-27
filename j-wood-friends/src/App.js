import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendCard from './Components/FriendCard';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

componentDidMount(){
  axios.get('http://localhost:5000/friends')
    .then(res => {
      console.log(res);
      this.setState({friends: res.data})
    })
    .catch(err => {
      console.log(err);
    })
}


  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (<Route exact path="/" key={friend.id} render={props => <FriendCard friends={friend}/>}/>))}
      </div>
    );
  }
}

export default App;
