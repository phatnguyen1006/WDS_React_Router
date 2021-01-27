import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import "./styles.css";
import Product from "./Product";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            {/* abc.com/ */}
            <Link to="/" >Home</Link>
          </li>
            {/* abc.com/category */}
          <li>
            <Link to="/category" >Category</Link>
          </li>

          <li>
            <Link to="/products" >Products</Link>
          </li>

          <li>
            <Link to="/admin" >Admin area</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/products">
          <Products />
        </Route>

        <PrivateRoute path="/admin" component={Admin} />

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
