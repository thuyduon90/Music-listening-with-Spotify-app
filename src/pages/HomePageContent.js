import React from 'react';
import {connect} from "react-redux";
import {actChangeQuery, actGoHome} from '../actions/index'

import Search from '../components/Search';
import Artist from '../components/Artist';
import fetchSpotify from '../services/fetchSpotify'

class HomePageContent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      foundArtists:[]
    }
  }
  
  searchArtist(query){
    if(query!==''){
      fetchSpotify(query).then((responseData) => {
        if(responseData!=='' && responseData!==undefined){
          this.setState({foundArtists : responseData.artists.items})
        }
      })
    }else{
      this.setState({foundArtists : []})
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    this.searchArtist(nextProps.query);
  }

  componentDidMount(){
    this.props.changeBreadcrumb();
  }
  UNSAFE_componentWillMount(){
    this.searchArtist(this.props.query);
  }

  render() {
    let {foundArtists} = this.state
    let htmlElement = foundArtists.map((value, index)=>{
      return <Artist key={index} artist={value}></Artist>
    });

    console.log(this.props.match);

    return (
      <div className="panel panel-info">
        <Search></Search>
        <div className="panel-body">
          {htmlElement}
        </div>
      </div>
    );
  }
}
const mapStateToProbs = state =>{
  return{
    query: state.query
  }
}
const mapDispatchToProbs = (dispatch, ownProps) =>{
  return{
    changeQuery: (newQeury)=>{
      dispatch(actChangeQuery(newQeury));
    },
    changeBreadcrumb: ()=>{
      dispatch(actGoHome());
    }
  }
}

export default connect(mapStateToProbs, mapDispatchToProbs) (HomePageContent);
