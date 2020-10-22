import React, { Component } from 'react';
import '../App.css'



class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
        password: ''
    }
    }
    handleUsername(value){this.setState({ username: value})}
    handlePassword(value){this.setState({ password: value})}
    handleLogin(username, password){ alert(`Username: ${username} Password: ${password}`)}
    render(){
        return(<div>
            <input onChange={ (e) => this.handleUsername(e.target.value) }/>
            <input onChange={ (e) => this.handlePassword(e.target.value) }/>
            <button onClick={ () => this.handleLogin(this.state.username, this.state.password) }>Login</button>
        </div>);
    }
 
}

export default Login;