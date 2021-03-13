import React, {Component, useEffect, useState} from 'react';
import { Link } from "react-router-dom";


const DinamicTable = ({character, history, deleteCharacter, prev, next}) => {


	return (
		<>
			<div className="grid-row30">
				<div>
					
					<div className="grid-table-title">
						<div className="item-title">
							<h2>Name</h2>
						</div>
						<div className="item-title">
							<h2>Picture</h2>
						</div>
						<div className="item-title">
							<h2>Status</h2>
						</div>
						<div className="item-title">
							<h2>Species</h2>
						</div>
						<div className="item-title">
							<h2>Origin Name</h2>
						</div>
						<div className="item-title">
							<h2>Origin Dimension</h2>
						</div>
						<div className="item-title">
							<h2>Numbers Episode</h2>
						</div>
						<div className="item-title">
							<h2></h2>
						</div>
					</div>
					
					{
						character.map((i) => {
							return (
								<div className="grid-table" key={i.id}>
									<Link to={{
										pathname: "/detail/"+i.id,
									}} className="item-result">
										<h3>{i.name}</h3>
									</Link>
									<div className="item-result">
										<div className="circle-pic">
											<img src={i.image} className="img-full" alt={i.name} />
										</div>
									</div>
									<div className="item-result">
										<h3>{i.status}</h3>
									</div>
									<div className="item-result">
										<h3>{i.species}</h3>
									</div>
									<div className="item-result">
										<h3>{i.origin.name}</h3>
									</div>
									<div className="item-result">
										<h3>{i.origin.url}</h3>
									</div>
									<div className="item-result">
										<h3>{i.episode.length}</h3>
									</div>
									<div className="item-result" onClick={()=>{deleteCharacter(i.id, character[character.length-1].id+1)}}>
										<button>Eliminar</button>
									</div>

								</div>
							)
						})
					}
				</div>
				<div className="grid-btn-pagination">
					<div className="btn" onClick={prev}>Preview</div>
					<Link to={"/create"} className="btn">CREATE</Link>
					<div className="btn" onClick={next}>Next</div>
				</div>
			</div>
		</>
	);
};

//el null obtiene algo de la store
export default DinamicTable;
