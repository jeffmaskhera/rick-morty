import {url} from '../config/config';



const list=(obj)=>{
    return{
        type:"SET_CHARACTER_LIST",
        payload:obj
    }
}

const selectOne=(obj)=>{
    return{
        type: 'SET_CHARACTER',
        payload: obj
    }
}

const episodes=(obj)=>{
    return{
        type:"SET_EPISODES",
        payload:obj
    }
}

const addOne=(obj)=>{
    return{
        type: 'ADD_CHARACTER',
        payload: obj
    }
}


export function searchCharacter(){
    return (dispatch) => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response)=>response.json())
            .then((res)=>
                // dispatch(list(res.results))
                dispatch(list(res))
            )
            .catch(err=>err)
    }
}

export function pagination(url){
    return (dispatch) => {
        return fetch(url)
            .then((response)=>response.json())
            .then((res)=>
                // dispatch(list(res.results))
                dispatch(list(res))
            )
            .catch(err=>err)
    }
}

export function filterCharacter(id){
    return (dispatch) => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response)=>response.json())
            .then((res)=>
                dispatch(selectOne(res))
            )
            .catch(err=>err)
    }
}

export function deleteCharacter(id, add){
    return (dispatch) => {
        dispatch({
            type: 'DELETE_CHARACTER',
            payload: id
        })
        //agregar usuario al borrar otro
        dispatch(addCharacter(add))
    }

}


export function searchEpisodes(){
    return (dispatch) => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then((response)=>response.json())
            .then((res)=>
                dispatch(episodes(res.results))
            )
            .catch(err=>err)
    }
}

export function  addCharacter(id){
    return (dispatch) => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response)=>response.json())
            .then((res)=>
                dispatch(addOne(res))
            )
            .catch(err=>err)
    }
}

export function updateCharacter(data){
    return (dispatch) =>
        dispatch({
            type: 'UPDATE_CHARACTER',
            payload: data
        })
}

export function createCharacter(data){
    return (dispatch) =>
        dispatch({
            type: 'CREATE_CHARACTER',
            payload: data
        })
}


