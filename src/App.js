import React, { Component } from 'react';
import logo from './logo.svg';
import AddUser from './AddUser.js'
import UserList from './UserList.js'
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state={
     users: [],
     showGamesPlayed: true,
  }

  toggleGamesPlayedPanel = () => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  };


  
  createContact = user => {
    this.setState(prevState => ({
        users: [...prevState.users, user],
    }));
  }


  render() {
       const { showGamesPlayed } = this.state;

	const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
    		<div className="Main">


              <h2> list of Users </h2>
				<AddUser onAddContact={this.createContact} users={this.state.users} />
				
              <div>
                <h1>Users</h1>
                {this.state.users && this.state.users.length > 0 ? gamesPlayedButton : ''}
                <UserList users={this.state.users} showGamesPlayed={this.state.showGamesPlayed} />
              </div>

			</div>
        </header>
      </div>
    );
  }
}

export default App;
