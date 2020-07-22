import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class User extends Component {

  render(){
    return(
            <p>Username: {this.props.user.userName}</p>
    )
  }

}

export default User;