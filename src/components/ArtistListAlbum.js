import React from 'react';

import ArtistListAlbumItem from './ArtistListAlbumItem';

var albums;

class ArtistListAlbum extends React.Component{
  constructor(props){
    super(props);
    albums=[]
  }
  
  
  showArtistListAlbumItem(albums){
    let element = '';
    if(albums.length>0){
      element=albums.map((value,index)=>{
        return <ArtistListAlbumItem album={value} key={index}></ArtistListAlbumItem>
      })
    }
    return element;
  }

  UNSAFE_componentWillReceiveProps(nextProp){
    albums = nextProp.albums; 
  }
  render() {
    return (
      <div className="col-sm-8 col-md-8">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">List Albums</h3>
          </div>
          <div className="panel-body list-albums">
            {this.showArtistListAlbumItem(albums)}
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistListAlbum;
