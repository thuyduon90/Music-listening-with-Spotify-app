import React from 'react';

import Search from './Search';
import Artist from './Artist';
class HomePageContent extends React.Component{
  
  render() {
    return (
      <div className="panel panel-info">
        <Search></Search>
        <div className="panel-body">
          <Artist></Artist>
          <Artist></Artist>
        </div>
      </div>
    );
  }
}

export default HomePageContent;
