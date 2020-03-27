import React from 'react';

import ArtistInfor from './ArtistInfor';
import ArtistListAlbum from './ArtistListAlbum';
class ArtistPageContent extends React.Component{
  
  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Singer</h3>
        </div>
        <div className="panel-body">
          <div className="panel-body">
            <ArtistInfor></ArtistInfor>
            <ArtistListAlbum></ArtistListAlbum>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistPageContent;
