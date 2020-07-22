import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



let userNameError = false;
let userNameTemp = '';
const BreakException = {}


class AddUser extends Component {
  
  state ={
      user: {
       firstName: '',
       lastName: '',
       userName: '',
      },
  }

handleInputChange = event => {
    const { name, value } = event.target;

    this.setState(currState => ({
      ...currState, user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

handleSubmit = event => {
  event.preventDefault()
  this.createContact(this.state.user)
}

 createContact = user => {
    userNameTemp = this.state.user.userName;
    
    if (this.props.users.length > 0 ){
    
      this.props.users.forEach(function(user) {

 		  if( user.userName === userNameTemp){
          userNameError = true;
          }
		});
    }

    
    if (!userNameError){
      user.numGamesPlayed = 0;
      user.firstName = this.state.user.firstName;
      user.lastName = this.state.user.lastName;
      user.userName = this.state.user.userName;
      this.props.onAddContact(user)
      //userNameError = falsehandleSubmit
    }else{
      document.querySelector(".ErrorMessage").innerHTML = "THIS USERNAME IS ALREADY TAKEN, PLEASE CHOOSE ANOTHER ONE";
      
      setTimeout(function(){ 
      document.querySelector(".ErrorMessage").innerHTML = "";
  }, 5000);
      userNameError = false
      this.setState(() => ({
      userName: '' 
      }))
     }
    };
handleSubmit
  render(){
    
  const { firstName, lastName, userName } = this.state.user;
  const ErrorMessage = <div className='ErrorMessage'></div>

  return(
   <div className='main'>
    {ErrorMessage}
     <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          value={firstName}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          value={lastName}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter User Name"
          name="userName"
          value={userName}
          onChange={this.handleInputChange}
        />
        <button disabled={!this.state.user.firstName, !this.state.user.lastName, !this.state.user.userName}>Add</button>
      </form>
	</div>
  
  )
}
}

export default AddUser;
  