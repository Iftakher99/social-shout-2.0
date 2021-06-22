import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './Components/Home/Body/Body';
import Header from './Components/Home/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import Login from './Components/Login/Login';
import firebaseConfig from './Components/Login/firebase.config';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path="/">
            <Body />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
