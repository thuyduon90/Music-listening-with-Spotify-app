
import * as config from '../constants/config';

export default function fetSpotifyConfig(method){
  var object = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + config.ACCESS_TOCKEN,
    }
  }
  return object
}