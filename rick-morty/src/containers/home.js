
import React, {Component, useEffect, useState} from 'react';
import DinamicTable from "../components/DinamicTable";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import { deleteCharacter, pagination } from '../actions/action';


const Home = (history, list) => {


	//dispatch sube la info a mi store
	const characterList = useSelector((state)=> state.characterList)
	const next = useSelector((state)=> state.next)
	const prev = useSelector((state)=> state.prev)
	//el useSelector trae la info de mi store
	// console.log('el estado total de mi app es', characterList)

	//dispatch es el disparador
	const dispatch = useDispatch()

	useEffect(()=>{
		console.log('asdasd',characterList)

	}, [dispatch])

	const nextPage =()=>{
		dispatch(pagination(next))
	}
	const prevPage =()=>{
		dispatch(pagination(prev))
	}

	return (
		<>
			<div className="container-body">
				<h1 className="text-title">Dinamic Table - Test React</h1>

				<DinamicTable character={characterList} history={history} deleteCharacter={(id, last)=>dispatch(deleteCharacter(id, last))} next={nextPage} prev={prevPage}/>
			</div>

		</>
	);
};


export default Home;


