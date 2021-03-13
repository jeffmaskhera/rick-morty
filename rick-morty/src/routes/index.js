import React,{Component, useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from '../containers/home';
import Detail from "../containers/detail";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import { searchCharacter } from '../actions/action';
import CreateCharacter from "../containers/createCharacter";


export default () => {

	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(searchCharacter())

		}, [dispatch])


	return (
		<Router history={useHistory}>
			<Switch>
				<Route exact path="/create" component={CreateCharacter}/>
				<Route exact path="/detail/:id" component={Detail}/>
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	);
};

