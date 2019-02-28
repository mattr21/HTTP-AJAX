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
      error: ''
      activeFriend: 
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

  addFriend = (e, item) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', item)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <NavLink to="/"><button>Home</button></NavLink>
        <NavLink to="/friend-form"><button>Add Friend</button></NavLink>
        <Route exact path="/" render={ props => <FriendsList {...this.state} {...props} /> } />
        <Route  path="/friend-form"  render={ props => <FriendForm {...props} addFriend={addFriend} /> } />
      </div>
    );
  }
}

export default App;
