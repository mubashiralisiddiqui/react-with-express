import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        
        this.state = {
            array: []
        }

    }
    // demo() {
    //     console.log('asdsad');
    // }

    componentWillMount() {

        var userId = firebase.auth().currentUser.uid;
        // console.log(userId)
        // return firebase.database().ref('users/' + userId).once('value').then(function (snapshot) {
        //     var userdetail = snapshot.val();
        //     console.log(userdetail)
        //     let dbarray=[];
        //     dbarray.push(userdetail)
        //     console.log(dbarray)
        //     console.log(this.state.array)
        //     this.setState({
        //         array: dbarray

        //     })

        // })
        firebase.database().ref('users/'+userId).once('child_added', (data) => {
            let obj = data.val();
            console.log("firebasedata", obj);
           let dbarray = [];
             
            //   for (var prop in obj) {
            //     dbarray.push(obj[prop]);
            //     //   console.log(reports);
            //     this.setState({
            //         array: dbarray
            //     })
            //     console.log(this.state.complaints);
            // }
              
            dbarray.push(obj)
            console.log(dbarray)
            console.log(this.state.array)
            this.setState({
                array: dbarray

            })
        })


    }

    logout(ev) {
        ev.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log('Sign-out successful.')

            browserHistory.push('/app')
        }, function (error) {
            // An error happened.
        })


    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar title="Blood Bank"

                        // iconClassNameRight="muidocs-icon-navigation-expand-more"
                        iconElementRight={<FlatButton onClick={this.logout} label="Logout" />}
                    />

                </MuiThemeProvider>
                <div>
                    {this.state.array.map((val, i) => {
                    return(<li key={i} >{val}</li>)
                })}
                </div>
                <select>
                    {/*{this.state.array.map((val, i) => {
                        return (<option key={i} >{val.username}</option>)
                    })}*/}

                    {/*<option ref="o">O</option>

                    <option ref="a">A+</option>
                    <option ref="b">B+</option>
                    <option ref="an">A-</option>
                    <option ref="ap">A+</option>*/}
                </select><br />
                {/*<div>
                    {this.state.array.map((val, i) => {
                        return (<div key={i}><li >{val.username}</li></div>)
                    })}
                </div>*/}
                <Link to="/donate"><button>Donate Blood</button></Link>
            </div>
        )
    }
}

export default Home; 