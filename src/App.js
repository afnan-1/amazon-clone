import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout.jsx'
import Login from './components/login/Login.jsx'
import {auth} from './config/firebase'
import {useStateValue} from './StateProvider'
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    //componentdidmount
    auth.onAuthStateChanged(authUser=>{
      console.log('user',authUser)
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
     
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        <Route path="/checkout">
        <Header />
            <Checkout/>
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
