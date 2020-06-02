import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		console.log(`name: ${event.target.name} value: ${event.target.value}`)
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log('username', this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('http://localhost:5000/signup/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		
		<div id = "signup">
		<div className="SignupForm">
			<h4>SIGN UP</h4>
			<form className="form-horizontal">
				<div className="form-group">
				<div className="col-3 col-mr-auto">
				<TextField
				style = {{width:"300px" ,margin:"15px"}}
          required
          type="text"
          label="Username"
          defaultValue="Username"
          variant="outlined"
          color="primary"
		id="username"
		name="username"
		placeholder="Username"
		value={this.state.username}
		onChange={this.handleChange}
        />
		</div>
		<div className="col-3 col-mr-auto">
             <TextField
			 style = {{width:"300px" ,margin:"15px"}}
          id="outlined-password-input"
          label="Password"
          autoComplete="current-password"
          color="primary"
          variant="outlined"
          placeholder="password"
		type="password"
		name="password"
		value={this.state.password}
		onChange={this.handleChange}
		
          
        />
		</div>
					  
				</div> 
				<div className="form-group ">
					<div className="col-7"></div>
					<Button id ="button" style = {{width:"130px"}} onClick={this.handleSubmit}  size="large" variant="contained" color="primary">
SIGN UP
</Button>
					
				</div>
			</form>
		</div>
		</div>

	)
}



		
	}

		
	

export default SignUp;