import React from 'react';
import './CardContainer.css';

const CardContainer = ({ favoriteFoodArray }) => {
  const foodCards = favoriteFoodArray.map((foodName, i) => <p key={ i }>{ foodName }</p>);

  return(
    <div id='card-container'>
      {foodCards}
    </div>
  )
}

export default CardContainer;