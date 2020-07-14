import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


{/** NOTES - REACT ROUTING CONCEPTS

  Route: Renders components based upon path file, including any common path names used in other routes (think of it in terms of regex), 
  so a common problem that can occur is rendering of sections intended to be separate "pages" due to common path names. Such as if the 
  homepage's path is '/' and our hats section's path is '/hats'. Both would be rendered. This can be avoided by using either the exact 
  property in Route or Switch.

  Switch: Used to help manage routes and route paths. Switch is wrapped around Route and any matching Route path is the only Route that gets 
  rendered. Useful to avoid rendering unnecessary components and thus help performance as well as keeping things clean and organized.

*/}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
