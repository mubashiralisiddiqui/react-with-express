import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signup from './components/signup';
import './index.css';
<<<<<<< HEAD
import Login from './login';
import Donate from './donate'
import Home from './home'
import { Router, Route, browserHistory} from 'react-router';
// import injectTapEventPlugin from "react-tap-event-plugin";
=======
import Login from './components/login';
import Donate from './components/donate'
import Home from './components/home'
import { Router, Route, browserHistory} from 'react-router';

import injectTapEventPlugin from "react-tap-event-plugin";
>>>>>>> 3716b47f7a6e2e92ad95be6258613c9cd6b4bad0



ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={ App}>
            {/*<IndexRoute component={App} />*/}
           
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login} />
            </Route>
            <Route path="/app" component={App}/>
            <Route path="/donate" component={Donate}/>
            <Route path="/home" component={Home} />
         
       
    </Router>,

  

  document.getElementById('root')
);
