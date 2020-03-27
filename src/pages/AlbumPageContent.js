import React from 'react';
import {connect} from "react-redux";

import Track from '../components/Track';
import {getAlbumByID} from '../services/axiosFunctions/axiosCaller'
import {actGoAlbum} from '../actions/index'



class AlbumPageContent extends React.Component{
  constructor(props){
      super(props);
      this.state={
        album:{
          images:[{url:''}]
        },
        tracks:[]
      }
    }

  UNSAFE_componentWillMount(){
    let id = this.props.match.params.id;
    getAlbumByID(id).then(response=>{
      this.setState({
        album:response.data,
        tracks: response.data.tracks.items
      })
      this.props.changeBreadcrumb(response.data.name, `/album/${response.data.id}`);
    })
  }

  showAlbumImage(imagesArray){
    let htmlCode='';
    if(imagesArray.length>0){
      htmlCode=<img className="media-object img-thumbnail" src={imagesArray[0].url} alt="singer" />
    }
    return htmlCode
  }

  showAlbumItem(tracks){
    let element = '';
    if(tracks.length>0){
      element=tracks.map((value,index)=>{
        return <Track track={value} key={index}></Track>
      })
    }
    return element;
  }

  render() {
    let {album, tracks} = this.state;
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h3 className="panel-title">Album 1</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">{this.showAlbumImage(album.images)}</div>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">List Tracks</h3>
                </div>
                <div className="panel-body">
                  {this.showAlbumItem(tracks)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProbs = (dispatch, ownProps) =>{
  return{
    changeBreadcrumb: (name, to)=>{
      dispatch(actGoAlbum(name, to));
    }
  }
}


export default connect(null, mapDispatchToProbs) (AlbumPageContent);