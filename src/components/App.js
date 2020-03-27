import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Title from './Title';
import Breadcrumb from './Breadcrumb';
import routes from '../route-config';

class App extends React.Component{
  
  showRoute(){
    return routes.map((route,index)=>
        <Route key={index} exact={route.exact} path={route.path} component={route.main}></Route>
    )
  }
  render() {
    return (
      <Router>
        <div className="container">
          {/* TITLE : START */}
          <Title></Title>
          {/* TITLE : END */}
          <div className="row">
            <Breadcrumb></Breadcrumb>
            <Switch>
              {this.showRoute()}
            </Switch>
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
