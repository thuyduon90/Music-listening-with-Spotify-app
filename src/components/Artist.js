import React from 'react';
import{Link} from 'react-router-dom'


class Artist extends React.Component{
  

  showArtistImage(imagesArray){
    let htmlCode='';
    if(imagesArray.length>0){
      htmlCode=<img src={imagesArray[0].url} alt="haha" />
    }
    return htmlCode
  }

  showArtistStyle(styles){
    let htmlCode='';
    if(styles.length>0){
      htmlCode=styles.map((value, index)=>{
        return <p key={index}><span className="label label-warning" style={{marginRight: '5px'}}>{value}</span></p>
      })
    }
    return htmlCode
  }

  render() {
    let {artist} = this.props;
    // console.log(artist);
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          {this.showArtistImage(artist.images)}
          <div className="caption">
            <h3>
              <Link to={'artist/'+artist.id}>{artist.name}</Link>
            </h3>
            {this.showArtistStyle(artist.genres)}
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;
