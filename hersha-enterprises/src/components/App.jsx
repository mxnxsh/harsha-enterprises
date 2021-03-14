import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Header from './Header';
import Payment from './Payment';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/payment' component={Payment} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </>
  );
}

export default App;
