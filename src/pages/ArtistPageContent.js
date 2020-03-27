import React from 'react';
import {connect} from "react-redux";
import {getArtistByID, getArtistAlbum} from '../services/axiosFunctions/axiosCaller'

import ArtistInfor from '../components/ArtistInfor';
import ArtistListAlbum from '../components/ArtistListAlbum';
import { actGoArtist } from '../actions';

class ArtistPageContent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      artist:{name:'', images:[{url:''}], genres:[]},
      albums:[]
    }
  }
  UNSAFE_componentWillMount(){
    let id = this.props.match.params.id;
    getArtistByID(id).then(response=>{
      this.setState({
        artist:response.data
      });
      this.props.changeBreadcrumb(response.data.name, `/artist/${response.data.id}`);
    })

    getArtistAlbum(id).then(response=>{
      this.setState({
        albums:response.data.items
      })
    })
  }


  render() {
    console.log(this.props.match);
    
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{this.state.artist.name}</h3>
        </div>
        <div className="panel-body">
          <div className="panel-body">
            <ArtistInfor artist={this.state.artist}></ArtistInfor>
            <ArtistListAlbum albums={this.state.albums}></ArtistListAlbum>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProbs = (dispatch, ownProps) =>{
  return{
    changeBreadcrumb: (name, to)=>{
      dispatch(actGoArtist(name, to));
    }
  }
}


export default connect(null, mapDispatchToProbs) (ArtistPageContent);

