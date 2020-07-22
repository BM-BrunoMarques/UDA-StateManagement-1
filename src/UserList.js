import React, { Component } from 'react';
import logo from './logo.svg';
import User from './User.js';
import './App.css';


class UserList extends Component {

  render(){
    return(
      <ol>
        {this.props.users.map(user => (
           <li key={user.userName} className="user">
      		<user user={user} />
            <p>Username: {user.userName}</p>
            <p>Number of Games Played: {this.props.showGamesPlayed ? user.numGamesPlayed : '*'}</p>
          </li>
        ))}
      </ol>
    )
  }

}

export default UserList;