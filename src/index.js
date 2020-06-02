import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";
import Example1 from "./Example1-atom";
import Example2 from "./Example2-selector";
import Example3 from "./Example3-useRecoilValueLoadable";
import Example8 from "./Example8-useTransactionObservation";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Atom</Link>
              </li>
              <li>
                <Link to="/selector">Selector</Link>
              </li>
              <li>
                <Link to="/useRecoilValueLoadable">useRecoilValueLoadable</Link>
              </li>
              <li>
                <Link to="/useTransactionObserver">useTransactionObserver</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Example1 />
            </Route>
            <Route exact path="/selector">
              <Example2 />
            </Route>
            <Route exact path="/useRecoilValueLoadable">
              <Example3 />
            </Route>
            <Route exact path="/useTransactionObserver">
              <Example8 />
            </Route>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
