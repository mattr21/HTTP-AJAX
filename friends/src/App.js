import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList'
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
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

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ props => <FriendsList {...this.state} {...props} /> } />
      </div>
    );
  }
}

export default App;
