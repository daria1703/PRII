import React, {Component} from "react";
import { Link } from "react-router-dom";
const axios = require('axios');


class Logowanie extends Component {

   state = {
       account: {
           username: "",
           password: ""
       },
       errors: {}
   };

   handleChangeRoute = () => {
    this.props.history.push('/');
    window.location.reload();
 };
 

   validate = () => {
       const errors = {};

       const {account} = this.state;
       if (account.username.trim() === '') {
           errors.username = 'Username is required!';
       }
       if (account.password.trim() === '') {
           errors.password = 'Password is required!';
       }

       return Object.keys(errors).length === 0 ? null : errors;
   };

   handleSubmit = (event) => {
       event.preventDefault();

       const errors = this.validate();
       this.setState({errors: errors || {}});
       if (errors) return;

       axios({
           method: 'post',
           url: 'https://pr-movies.herokuapp.com/api/user/auth',
           data: {
               login: this.state.account.username,
               password: this.state.account.password
           }
       }).then((response) => {
           localStorage.setItem('token', response.data.token);
           this.handleChangeRoute();
       }).catch((error) => {
           const errors = {};
           errors.password = 'Given username does\'t exists or password is wrong!';
           this.setState({errors: errors || {}});
           console.log(error);
       });
   };

   handleChange = (event) => {
       const account = {...this.state.account};
       account[event.currentTarget.name] = event.currentTarget.value;
       this.setState({account});
   };

   render() {
       return (
           <div className="con">
               <div className="container3">
                   <div className="container4">
                       <h2 className="titleform">Login</h2>
                       <form onSubmit={this.handleSubmit}>
                           <div className="name">
                               <label className="label" htmlFor="username">Email address:</label>
                               <input value={this.state.account.username}
                                   name="username"
                                   onChange={this.handleChange}
                                   type="text"
                                   className="form-control"
                                   id="username"
                                   aria-describedby="emailHelp"
                                   placeholder="Username" />
                               {this.state.errors.username &&
                                   <div className="alert alert-danger">{this.state.errors.username}</div>}
                           </div>
                           <div className="name">
                               <label className="label" htmlFor="password">Password:</label>
                               <input value={this.state.account.password}
                                   name="password"
                                   onChange={this.handleChange}
                                   type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="Password" />
                               {this.state.errors.password &&
                                   <div className="alert alert-danger">{this.state.errors.password}</div>}
                           </div>
                           <div className="btn-div"> 
                           <button type="submit" className="button2">
                               <Link class="link-btn2" to={'./home'}>Login in</Link></button>
                       </div>
                       </form>
                   </div>
               </div>
               <footer class='footer' >
                   <p class="footer">Copy right 2022 - Films</p>
               </footer>
           </div> 
       );
   }
}

export default Logowanie;
