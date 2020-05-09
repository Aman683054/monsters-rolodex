import React from 'react';
import './Cards.styles.css';

export const Card = props => {
    return(
        <div className="card-container">
            <img alt="monsters" src={`https://robohash.org/${props.monster.id}?size=180x180`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}