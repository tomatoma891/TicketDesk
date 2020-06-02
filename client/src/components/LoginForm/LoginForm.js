import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import "./style.css";



  


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('http://localhost:5000/signup/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: this.state.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/home'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render () {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div id = "login">
                    
                 <h4>LOGIN</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                        <div className="col-3 col-mr-auto">
                        <TextField
                         style = {{width:"300px", margin:"15px"}}
          required
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          label="Username"
          defaultValue="Username"
          variant="outlined"
          color="primary"
          value={this.state.username}
          onChange={this.handleChange}
        />
        </div>
        <div className="col-3 col-mr-auto">
             <TextField
             style = {{width:"300px" ,margin:"15px"}}
          id="outlined-password-input"
          placeholder="password"
          type="password"
          name="password"
          label="Password"
          autoComplete="current-password"
          color="primary"
          variant="outlined"
          value={this.state.password}
          onChange={this.handleChange}
          
        />
</div>
                        </div> 
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <Button id ="button" style = {{width:"130px"}}  onClick={this.handleSubmit}  size="large" variant="contained" color="primary">
Login
</Button>
                            
                            
                        </div>
                    </form>
            
      
                </div>
            )
        }
    }
}

export default LoginForm