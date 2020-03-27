import React from 'react';
import {connect} from "react-redux";
import { Link, Route } from "react-router-dom";


const MenuLink = ({ menu }) => {
	return (
		<Route 
			path={menu.to} 
			exact={menu.exact} 
			children=
				{ 
					({ match }) => {
						if(match !== null && match.isExact === true) {
							return <li className="active" >{menu.name}</li>;	
						}else {
							return <li ><Link to={menu.to} >{menu.name}</Link></li>;
						}
					}
				}
		/>
	)
}

class Breadcrumb extends React.Component{

  showBreadcrum(breadcrumb){
    let htmlCode ='';
    htmlCode=breadcrumb.map((value, index)=>{
      if(value.to===''){
        return <li className="active" key={index}>{value.name}</li>
      }else{
        return <li key={index}><Link to={value.to}>{value.name}</Link></li>
      }
    })
    return htmlCode;
  }
  render() {
    let menus = this.props.breadcrumb;
		let xhtml = null;
		if(menus.length > 0 ){
			xhtml = menus.map((menu, index)=> {
				if(menu !== undefined)  {
					return (
						<MenuLink menu={menu} key={index} />
					);
				}
				return null;
			});
		}
    return <ol className="breadcrumb">{xhtml}</ol>;
  }
}
const mapStateToProbs = state =>{
  return{
    breadcrumb: state.breadcrumb
  } 
}

export default connect(mapStateToProbs, null) (Breadcrumb);
