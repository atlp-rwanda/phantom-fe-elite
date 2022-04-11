import React from 'react'
import InputForm from './Routes/InputForm'
import Home from './Routes/Home';
import AboutPage from './Routes/AboutPage';
import { Route, BrowserRouter, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/input" component={InputForm}></Route>
          <Route path="/about" component={AboutPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
