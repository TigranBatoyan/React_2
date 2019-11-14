import React, { useState } from  'react';
import './index.css';

const List = props =>{
        const { data, onItemDelete, onItemUpdate } = props
        
        const[item, setItem] = useState({...data})

       const onDelete = (id) =>{
            onItemDelete(id)
        }

        const onUpdate = (data) =>{
            onItemUpdate(data)
        }

        return(
            <div className='list'>
                <p className='row'>Name:{data.name}</p>
                <p className='row'>Location:{data.location}</p>
                <p className='row'>Description:{data.description}</p>
                <div className='buttons'>
                    <button
                         className="btn btn-success btn-lg"
                         onClick = {() => onUpdate(data.id)}
                    >
                        Update
                    </button>
                    <button 
                        className="btn btn-danger btn-lg"
                        onClick = {() =>onDelete(data.id)}
                    >
                        Delete
                    </button>
                </div>
                
            </div>
        )
}
export default List