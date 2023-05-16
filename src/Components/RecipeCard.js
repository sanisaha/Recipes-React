import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    return (
     <div className="relative card w-44 glass">
  <img className='absolute -top-2 -right-2 rounded w-10' src={recipe.origin} alt=""/>
  <img className='rounded-xl max-h-32 p-2' src={recipe.image} alt=""/>
  <div className="card-body">
    <h2 className="card-title">{recipe.title}</h2>
    <div className="card-actions justify-end">
      <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">See more!</Link>
    </div>
  </div>
</div>
    );
};

export default RecipeCard;