import React from 'react';
import {connect} from "react-redux";
import {actChangeQuery} from '../actions/index'

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    this.props.changeQuery(this.state.query)
    event.preventDefault();
  }

  handleClear(){
    this.setState({query: ''});
    this.props.changeQuery('')
  }

  render() {
    return (
      <div className="panel-heading">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input value={(this.state.query!=='')? this.state.query:this.props.query} onChange={this.handleChange} name="query" type="text" className="form-control" placeholder="Enter artist name ..." />
            <button type="submit" className="btn btn-danger">Search</button>
            <button onClick={this.handleClear} type="button" className="btn btn-primary">Clear</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProbs = state =>{
  return{
    query: state.query,
  }
}
const mapDispatchToProbs = (dispatch, ownProps) =>{
  return{
    changeQuery: (newQeury)=>{
      dispatch(actChangeQuery(newQeury));
    }
  }
}

export default connect(mapStateToProbs, mapDispatchToProbs) (Search);

