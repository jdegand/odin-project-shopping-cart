import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from "./Cart";
import Vexillophile from "./Vexillophile";
import "./App.css";

export default function App() {

  const initialValues = {
    belgium: 0,
    elSalvador: 0,
    monaco: 0,
    nepal: 0,
    niger: 0,
    qatar: 0,
    switzerland: 0,
    togo: 0,
    vaticanCity: 0
  };


  const [amount, setAmount] = useState(initialValues);

  const add = (e) => {
    setAmount({
      ...amount,
      [e.target.previousSibling.previousSibling.name]: parseInt(e.target.previousSibling.previousSibling.value) + 1,
    });
   }

  const subtract = (e) => {
    setAmount({
      ...amount,
      [e.target.previousSibling.name]: e.target.previousSibling.value - 1,
    });
  }

  const handleChange = (e) => {

   setAmount({
     ...amount,
     [e.target.name]: e.target.value,
   });
 };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Vexillophile</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Vexillophile amount={amount} add={add} subtract={subtract} change={handleChange} />
          </Route>
          <Route path="/cart">
            <Cart amount={amount} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
