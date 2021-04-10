import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Home from "./components/Home/Home";

import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductsCheck from "./components/ProductsCheck/ProductsCheck";


export const UserContext=createContext();





function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/addProduct">AddProduct</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/productsCheck">ProductsCheck</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/AddProduct">
            <AddProduct />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <PrivateRoute path="/productsCheck/:id">
            <ProductsCheck />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
  
}

export default App;
