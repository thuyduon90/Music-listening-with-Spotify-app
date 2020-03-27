import React from 'react';


class Track extends React.Component{
  
  render() {
    let {track} = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 track">
        <h4>{track.name}</h4>
        <audio src={track.preview_url} controls>Your browser does not support the audio element.</audio>
      </div>
    );
  }
}

export default Track;
