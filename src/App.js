import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Store from './components/store/store';
import Gist from './pages/gist/Gist';

const App = () => (
  <Store>
    <BrowserRouter>
      <React.Fragment>
        <div className="container is-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Gist} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  </Store>
);

export default App;
