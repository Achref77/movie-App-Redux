import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Nav from "./Nav.js";
import Nv from "./nav.css";
import ListMovi from "./ListMovi.js";
import Descritionap from "./ListMovi.css";
import ModalExample from "./modal";
import FooterPage from "./footer.js";
import Accueil from "./about";
import NotFound from "./notFound";

import "bootstrap/dist/css/bootstrap.min.css";

function movieAplication(props) {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
            <Route exact path="/" component={ListMovi} />
            <Route path="/movie/:id" component={Accueil} />
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
        </Switch>
        <FooterPage />
      </Router>
    </div>
  );
}
export default connect(null, null)(movieAplication);
