import {React, useEffect, useState} from 'react'

import {useSelector, useDispatch} from "react-redux";
import {filterCharacter, searchCharacter, searchEpisodes, updateCharacter} from '../actions/action';


const Detail = ({ match}) => {
		
	const dispatch = useDispatch()
	const character = useSelector((state)=> state.character)
	const characterList = useSelector((state)=> state.characterList)
	const episodes = useSelector((state)=> state.episodes)

	const [edit, setEdit]=useState({});

  

    useEffect(()=>{
		if(!character.id) {
			dispatch(filterCharacter(match.params.id))
			console.log(character)
			dispatch(searchEpisodes())
		}

		 if (character)
		 	setEdit(character)
	}, [character])
	

	const handler=({target})=>{
		let {name,value}=target;
		setEdit({...edit,[name]:value});
	}

	const save=()=>{
		dispatch(updateCharacter(edit))
	}


    // console.log('esto es match', match.params.id)
	// console.log('estos son los episodios totales', episodes)
	// const arrayEspisodes = character.episode;
	// console.log('mis episodios', arrayEspisodes)


	// a.forEach(function (value, i) {
	// 	const result = episodes.filter(i => i.url == character.episode[i])
	// 	console.log('este es mi filtro donde trabajo mi usuario', result)
	// });

	// arrayEspisodes.forEach((item, index)=>{
	// 	console.log(index, item)
	// })

     return (
        <>
            <div>
				<div className="container-detail">

					<div>
						<img className="img-full-fluid" src={character.image} alt={character.name}/>
					</div>

					<div className="container-info">
						<div className="grid-row30">

							<div className="grid-form">
								<div className="grid-row10">
									<label>Name</label>
									<input className="input-style"  type="text" name="name" id="name" onChange={handler} value={edit.name}/>
								</div>
								<div className="grid-row10">
									<label>Status</label>
									<input className="input-style" type="text" name="status" id="status" onChange={handler} value={edit.status}/>
								</div>
								<div className="grid-row10">
									<label>Species</label>
									<input className="input-style" type="text" name="species" id="species" onChange={handler} value={edit.species}/>
								</div>

								<div className="grid-row10">
									<label>Episodes</label>

									<select name="select" className="input-style">
										{
											character.episode ? character.episode.map(i=>
													<option key={i.id} value={i}>{i}</option>
												)
												:
												undefined
										}
									</select>
								</div>
							</div>
							<div className="btn" onClick={save}>editar</div>

						</div>

					</div>


				</div>
            </div>
        </>
    );
};

export default Detail;

