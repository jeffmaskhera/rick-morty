export function reducer(state, action) {
	console.log(action)
	
	switch (action.type) {
		case 'SET_CHARACTER_LIST': {
			console.log('voy a actualizar la lista por el reducer')
			return {
				...state,
				characterList:
				// action.payload
				action.payload.results,
				next:action.payload.info.next,
				prev:action.payload.info.prev,
				page:action.payload.info.page
			}
		}
		case  'SET_CHARACTER': {
			// state.characterList.find(i=>{console.log(i,action.payload); return i.id===action.payload})
			return {
				...state,
				// character:action.payload
				character:{...action.payload,...state.character}
			}
		}
		case  'DELETE_CHARACTER': {
			// state.characterList.find(i=>{console.log(i,action.payload); return i.id===action.payload})
			return {
				...state,
				characterList:state.characterList.filter(i=>i.id!==action.payload)
			}
		}
		case  'SET_EPISODES': {

			return {
				...state,
				episodes:action.payload
			}
		}
		case  'ADD_CHARACTER': {

			return {
				...state,
				characterList:[...state.characterList,action.payload]
			}
		}

		case  'UPDATE_CHARACTER': {

			return {
				...state,
				character:action.payload
			}
		}

		case  'CREATE_CHARACTER': {

			return {
				...state,
				character:action.payload
			}
		}
		
		default: {
			return state
		}
	}
	
	return state
}

