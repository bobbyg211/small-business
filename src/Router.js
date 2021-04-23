import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Listings from "./containers/Listings";
import AddListing from "./containers/AddListing";
import Details from "./containers/Details";
import Login from "./components/Login";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      path="/add"
      render={() => (checkAuth() ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Listings} />
      <Route path="/listing/:id" component={Details} />
      <ProtectedRoute path="/add" component={AddListing} />
    </Switch>
  );
};

export default Router;
