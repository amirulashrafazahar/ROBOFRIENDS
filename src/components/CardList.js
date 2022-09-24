import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return(
        <React.StrictMode>
                <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>
        </React.StrictMode>)
    })
    return (
        <div>
            <React.StrictMode>
                {cardComponent}
            </React.StrictMode>
           
</div>

    );
}

export default CardList;