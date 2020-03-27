import axios from 'axios';
import * as config from '../../constants/config';
import fetSpotifyConfig from '../../services/fetchSpotifyConfig';

const queryString = require('query-string');

export function getArtistByID(id){
  let url = config.BASE_URL+'artists/'+id;
  var object = fetSpotifyConfig('GET');

  return axios.get(url, object).catch(function (error) {
    console.log(error);
  });
}

export function getArtistAlbum(id){
  
  var object = fetSpotifyConfig('GET');
  const params = {
    include_groups:'single,appears_on',
    market:'US',
    offset:0,
    limit:10
  }
  const stringified = queryString.stringify(params);
  let url = config.BASE_URL+'artists/'+id+'/albums?'+stringified;
  return axios.get(url, object).catch(function (error) {
    console.log(error);
  });
}

export function getAlbumByID(id){
  
  var object = fetSpotifyConfig('GET');
  // const params = {
  //   market:''
  // }
  // const stringified = queryString.stringify(params);
  let url = config.BASE_URL+'albums/'+id;
  return axios.get(url, object).catch(function (error) {
    console.log(error);
  });
}





// export default function fetchSpotify(query){
//   let newQuery = convertQuery(query)
//   const params = {
//     type:'artist',
//     market:'US',
//     offset:0,
//     limit:10
//   }
//   const stringified = queryString.stringify(params);

//   let url = config.BASE_URL+'search?query='+newQuery+'&'+stringified;
//   var object = fetSpotifyConfig('GET');
//   return fetch(url, object)
//     .then((response) => response.json());
// }