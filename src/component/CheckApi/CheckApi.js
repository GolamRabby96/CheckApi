import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Details from './Details';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { userContext } from '../../App';


const CheckApi = () => {
    const [subDataCollention, setsubDataCollention] = useContext(userContext);

    const element = <FontAwesomeIcon icon={faArrowRight} />;
    const [implement, setImplement] = useState({});
    useEffect(() => {
        fetch('https://www.test.api.liker.com/get_categories')
        .then( res => res.json())
        .then( data => setImplement(data))

    }, [])
    const handleChange = (subname) => {
        let currentData = subname;
        const index = subDataCollention.indexOf(currentData);
        if (index > -1) {
            let addData = [...subDataCollention]
            addData.splice(index, 1);
            setsubDataCollention(addData)
        }else{
            let addData = [...subDataCollention,currentData]
            setsubDataCollention(addData)
        }
		
	}

    const handleDelete = (deleteName)=>{
        const index = subDataCollention.indexOf(deleteName);
        if (index > -1) {
            let addData = [...subDataCollention]
            addData.splice(index, 1);
            setsubDataCollention(addData)
        }
    }

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4">
                {subDataCollention && subDataCollention.map(subDisplay => 
                    (<div className="subtotalSection shadow">
                        <h4>
                        <span className="icon">{element}</span>{subDisplay}
                        <button onClick={()=>handleDelete(subDisplay)} type="button" class="btn-sm btn-close flostright" aria-label="Close"></button>
                        </h4>
                        </div>
                ))}
            </div>
            <div className="col-md-8">
                {implement.categories &&
                    implement.categories.map( list => <Details list={list} handleChange={handleChange}></Details>)
                }
            </div>
        </div>
    </div>
    );
};

export default CheckApi;