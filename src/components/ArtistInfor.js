import React from 'react';

var artist;
class ArtistInfor extends React.Component{
  constructor(props){
    super(props);
    artist={
      name:'',
      images:[{url:''}],
      genres:[],
      external_urls:{spotify: ''}
    };
  }

  showArtistImage(imagesArray){
    let htmlCode='';
    if(imagesArray.length>0){
      htmlCode=<img src={imagesArray[0].url} alt="haha" className="img-rounded img-responsive" />
    }
    return htmlCode
  }

  showArtistStyle(styles){
    let htmlCode='';
    if(styles.length>0){
      htmlCode=styles.map((value, index)=>{
        return <span key={index} className="label label-warning" style={{marginRight: '5px'}}>{value}</span>
      })
    }
    return htmlCode
  }

  UNSAFE_componentWillReceiveProps(nextProp){
    artist = nextProp.artist; 
  }
  render() {
    return (
      <div className="col-sm-4 col-md-4">
        {this.showArtistImage(artist.images)}
        <blockquote style={{marginTop: '20px'}}>
          <p>{artist.name}</p>
        </blockquote>
        <p><i className="glyphicon glyphicon-play-circle" /><a rel="noopener noreferrer" target="_blank" href={artist.external_urls.spotify}> View Spotify</a><br /><br /><i className="glyphicon glyphicon-play-circle" /> Genres: {this.showArtistStyle(artist.genres)}</p>
      </div>
    );
  }
}

export default ArtistInfor;
