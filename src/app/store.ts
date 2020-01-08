import {IGifs} from './interfaces';
import { ADD_GIFS } from './actions';

export const INITIAL_STATE: IGifs = {
	gifs: []
}

export function rootReducer(state, action){
	switch(action.type){

		case ADD_GIFS:
			return Object.assign({}, state, action.gifs)

		default: 
			return state;

	}
}

