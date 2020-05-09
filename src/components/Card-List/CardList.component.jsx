import React from 'react';
import  './CardList.styles.css';
import {Card} from '../Cards/Cards.components'

export const CardList = props => {

    return(

    <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
      ))}
      </div>
    )
}