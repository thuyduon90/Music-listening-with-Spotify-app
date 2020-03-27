import React from 'react';

import Search from '../components/Search';
class HomePageContent extends React.Component{
  
  render() {
    return (
      <div className="panel panel-info">
        <Search></Search>
        <div className="panel-body">
          <h3>Not Found</h3>
        </div>
      </div>
    );
  }
}

export default HomePageContent;
