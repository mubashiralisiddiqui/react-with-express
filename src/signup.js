import React from 'react';
import './App.css';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
// import DropDownMenuSimpleExample from './dropdown'

// import Home from "./home";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this)
  }
  signup(ev) {
    ev.preventDefault();
    console.log(this.refs.email.getValue());
    console.log(this.refs.Password.getValue());
    console.log(this.refs.name.getValue());
    
    let name = this.refs.name.getValue();
    let email = this.refs.email.getValue();
    let password = this.refs.Password.getValue();
    firebase.auth().createUserWithEmailAndPassword(email, password)

      .then((user) => {
        let userDetails = {
          useremail: user.email,
          username: name
        }
        browserHistory.push('/login')

        firebase.database().ref('users/' + user.uid).set(userDetails)


      })

  }
  render() {

    return (
      <div>
        <h1 className="text-center">signup</h1>
        <MuiThemeProvider>
          <div className="form">
             <form onSubmit={this.signup.bind(this)}>
            <TextField hintText="Name" ref="name" /> <br />
            <br />
            <TextField hintText="Email" ref="email" /> <br />
            <br />
            <TextField type="password" hintText="Password" ref="Password" /> <br />
            <br />
            <div>
              <DropDownMenuOpenImmediateExample />
            </div>
        
               <RaisedButton  type="submit" label="Signup" primary={true} />
              {/*<button className="btn-primary rounded">signup</button>*/}
              <Link to="/login"><p>Already have an account?</p></Link>
          </form>
          </div>
        </MuiThemeProvider>
        
        <div className="form">
         
        </div>

      </div>

    )
  }
}
injectTapEventPlugin()
class DropDownMenuOpenImmediateExample extends React.Component {

  constructor(props) {
      
    super(props);
    this.state = {value: 3};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false}>
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </DropDownMenu>
    );
  }
}



export default Signup;
