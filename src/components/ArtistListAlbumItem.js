import React from 'react';
import { Link } from "react-router-dom";

class ArtistListAlbumItem extends React.Component{


  showAlbumImage(imagesArray){
    let htmlCode='';
    if(imagesArray.length>0){
      htmlCode=<img src={imagesArray[0].url} alt="image" className="img-responsive" />
    }
    return htmlCode
  }
  
  render() {
    let {album} = this.props;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          {this.showAlbumImage(album.images)}
          <div className="caption">
            <h5><Link to={'/album/'+album.id}>{album.name}</Link></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistListAlbumItem;
