import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList'
import axios from 'axios';
import { Route } from 'react-router-dom';
import FriendForm from './components/FriendForm'

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

  // ************** async await method **************
  // async componentDidMount() {
  //   try {
  //   const response = await axios.get('http://localhost:5000/friends')
  //     this.setState({friends: response.data })
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ props => <FriendsList {...this.state} {...props} /> } />
        <Route  path="/friend-form"  render={ props => <FriendForm {...props} /> } />
      </div>
    );
  }
}

export default App;
