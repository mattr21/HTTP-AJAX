import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList'
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import FriendForm from './components/FriendForm'

class App extends Component { 
  constructor() {
    super();
    this.state = {
      friends: [],
      error: '',
      activeFriend: null,
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        // console.log(res);
        this.setState({ friends: res.data })
      })
      .catch(err => {
        // console.log(err);
        this.setState({ error: err })
      })
  }

  // ************** async await method **************
  // async componentDidMount() {
  //   try {
  //   const response = await axios.get('http://localhost:5000/friends')
  //     this.setState({friends: response.data })
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        console.log(res)
        this.setState({
          friends: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          activeFriend: null, 
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push("/friend-form");
  };

  render() {
    return (
      <div className="App">
        <NavLink to="/"><button>Home</button></NavLink>
        <NavLink to="/friend-form"><button>Add Friend</button></NavLink>
        <Route exact path="/" render={ props => <FriendsList {...this.state} {...props} deleteFriend={this.deleteFriend} setUpdateForm={this.setUpdateForm} /> } />
        <Route  path="/friend-form"  render={ props => <FriendForm {...props} addFriend={this.addFriend} updateFriend={this.updateFriend} activeFriend={this.state.activeFriend} /> } />
      </div>
    );
  }
}

export default App;
