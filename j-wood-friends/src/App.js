import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendCard from './Components/FriendCard';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AddFriend from './Components/AddFriend';
import Friend from './Components/Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      display: [],
      friends: [],
      search: '',
    }
  }

componentDidMount(){
  axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({display: res.data, friends: res.data})
    })
    .catch(err => {
      console.log(err);
    })
}

addFriend = (e, friend) => {
  e.preventDefault();
  axios
    .post('http://localhost:5000/friends', friend)
    .then(res => {
      this.setState({
        display: res.data,
        friends: res.data
      });
      this.props.history.push("/");
    })
    .catch(err => {
      console.log(err);
    });
}

deleteFriend = (e, id) => {
  e.preventDefault();
  axios
  .delete(`http://localhost:5000/friends/${id}`)
  .then(res => {
    this.setState({
      display: res.data,
      friends: res.data
    });
    this.props.history.push("/");
  })
  .catch(err => {
    console.log(err);
  });
}

setUpdateForm = (e, friend) => {
  e.preventDefault();
  this.setState({
    activeFriend: friend
  });
  this.props.history.push("/addfriend");
};

updateFriend = (e, friend) => {
  e.preventDefault();
  axios
  .put(`http://localhost:5000/friends/${friend.id}`, friend)
  .then(res => {
    this.setState({
      activeFriend: null,
      display: res.data,
      friends: res.data
    })
    this.props.history.push("/");
  })
  .catch(err => {
    console.log(err);
  });
}

// changeHandler = element => {
  
//   this.setState({ search: element.target.value});
  
//   this.searchHandler(this.state.search);
  
// }

searchHandler = element => {
  
  console.log(element.target.value);
  let filteredFriends = this.state.friends.filter(
    (friend) => {
      return friend.name.toLowerCase().includes(element.target.value.toLowerCase());
    }
)

console.log(filteredFriends);
  if (filteredFriends.length > 0) {
    this.setState({display: filteredFriends})
  } else {
    this.setState({display: this.state.friends})

  }


}


  render() {
    return (
      <div className="App">
        <NavBar searchHandler={this.searchHandler} />

        {this.state.display.map(friend=> ( 
          <Route exact path="/" render={props => (
            <FriendCard 
              {...props} 
              friends={friend} 
              key={friend.id} 
            />
          )}  
        />)
        )} 

        <Route 
          exact
          path="/:id"
          render={props => (
            <Friend
              {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />

        <Route path="/addfriend" render={props => (
            <AddFriend 
              {...props}
              activeFriend={this.state.activeFriend}
              addFriend={this.addFriend} 
              updateFriend={this.updateFriend}
            />
        )} 
        />
      </div>
    );
  }
}

export default App;
