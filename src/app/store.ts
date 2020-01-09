import { IGifs } from './interfaces';
import { ADD_GIFS, ADD_MORE_GIFS } from './actions';

export const INITIAL_STATE: IGifs = {
	gifs: []
}

export function rootReducer(state, action) {
	switch (action.type) {

		case ADD_GIFS:
			return Object.assign({}, state, action.gifs)

		case ADD_MORE_GIFS:
			console.log(state)
			console.log(action)
			return { gifs: [...state.gifs, ...action.gifs.gifs] }

		default:
			return state;

	}
}

