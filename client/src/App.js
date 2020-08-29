import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./Pages/SearchPage";
import SavedPage from "./Pages/SavedPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/saved" component={SavedPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
