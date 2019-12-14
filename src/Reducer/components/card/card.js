import React, { useContext } from 'react';
import Context from '../../context/context';
import './card.css';

const Card = props => {
    const { dispatch } = useContext(Context);
    const { name, location, description, id } = props.data;

    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    <b>Name:</b>  {name}
                </div>
                <div className="meta">
                    <b>Location:</b>{location}
                </div>
                <div className="description">
                    <b>Description:</b> {description}
                </div>
            </div>
            <div className="extra content">
                <div>
                    <button onClick={() => {dispatch({ type: 'UPDATE', payload: id })}}>Update</button>
                    <button onClick={() => {dispatch({ type: 'REMOVE', payload: id })}}>Remove</button>
                </div>
            </div>
        </div>
    );
};


export default Card;