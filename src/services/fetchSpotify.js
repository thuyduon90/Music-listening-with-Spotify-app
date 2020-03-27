
import * as config from '../constants/config';
import convertQuery from '../services/convertQuery';
import fetSpotifyConfig from '../services/fetchSpotifyConfig';

const queryString = require('query-string');

export default function fetchSpotify(query){
  let newQuery = convertQuery(query)
  const params = {
    type:'artist',
    market:'US',
    offset:0,
    limit:10
  }
  const stringified = queryString.stringify(params);

  let url = config.BASE_URL+'search?query='+newQuery+'&'+stringified;
  var object = fetSpotifyConfig('GET');
  return fetch(url, object)
    .then((response) => response.json());
}