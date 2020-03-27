import { combineReducers } from 'redux';
import query from './query';
//import foundArtists from './foundArtists';
import breadcrumb from './breadcrumb';

const appReducers = combineReducers({
	query,
	breadcrumb
});

export default appReducers;