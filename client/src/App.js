import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Container from "./components/Container/Container";
import TicketCard from "./components/TicketCard/TicketCard";
//import { Router } from 'express';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import Chart from "./components/Chart/Chart"

class App extends Component {
  constructor() {
    super()
    this.state = {
        loggedIn: false,
        username: false
    }

  
    this.updateUser = this.updateUser.bind(this)
  }



  updateUser(userObject) {
    this.setState({username: userObject.username}, () => {
      console.log('usrObj', this.state.username);
    })
    this.setState({loggedIn: userObject.loggedIn})
  }

  

  render() {
    return (
      <Router>
        <div className="App">
        
    {this.state.loggedIn && <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />} 
           
           {this.state.loggedIn && this.state.username ?
             <p>Join the party, {this.state.username}!</p> : <div></div>
          }  
          <Route exact path={"/home"}>
             <Container /> 
          </Route>
          <Route exact path={"/signup"}>
            <SignUp />
          </Route>
          <Route exact path={"/login"}>
            <LoginForm updateUser={this.updateUser} />
          </Route>
          <Route exact path={"/ticketCard"}>
            <TicketCard />
          </Route>
           <Route exact path={"/"}>
          <Home/>
          </Route> 
          <Route exact path={"/chart"}>
          <Chart/>
          </Route> 
                
          <Footer />
   
        </div>
      </Router>

    );
  }
};

export default App;