import {React, useEffect, useState} from 'react'

import {useSelector, useDispatch} from "react-redux";
import {createCharacter} from '../actions/action';


const CreateCharacter = ({ match}) => {

    const dispatch = useDispatch()


    const [create, setCreate]=useState({});

    const handler=({target})=>{
        let {name,value}=target;
        setCreate({[name]:value});
    }

    const saveCharacter=()=>{
        dispatch(createCharacter(create))
        console.log(create)
    }

    console.log('nuevo usuario', create)

    return (
        <>
            <div className="container-form">
                <div className="grid-form">
                    <div className="grid-row10">
                        <label>Name</label>
                        <input className="input-style"  type="text" name="name" id="name" onChange={handler}/>
                    </div>
                    <div className="grid-row10">
                        <label>Status</label>
                        <input className="input-style" type="text" name="status" id="status" onChange={handler}/>
                    </div>
                    <div className="grid-row10">
                        <label>Species</label>
                        <input className="input-style" type="text" name="species" id="species" onChange={handler}/>
                    </div>
                    <div className="grid-row10">
                        <label>Origin Name</label>
                        <input className="input-style" type="text" name="origin" id="origin" onChange={handler}/>
                    </div>
                    <div className="grid-row10">
                        <label>Dimension</label>
                        <input className="input-style" type="text" name="dimension" id="dimension" onChange={handler}/>
                    </div>

                    <div className="grid-row10">
                        <label>Number Episode</label>
                        <input className="input-style" type="number" name="episode" id="episode" onChange={handler}/>
                    </div>
                </div>

                <div className="btn" onClick={saveCharacter}>
                    GUARDAR
                </div>

            </div>
        </>
    );
};

export default CreateCharacter;

