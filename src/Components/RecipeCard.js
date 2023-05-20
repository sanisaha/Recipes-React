import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    return (
     <div className="relative card w-40 sm:w-44 glass">
  <img className='absolute -top-2 -right-2 rounded w-10' src={recipe.origin} alt=""/>
  <img className='rounded-xl max-h-32 p-2' src={recipe.image? recipe.image : 'https://cdn.vectorstock.com/i/preview-1x/32/45/no-image-symbol-missing-available-icon-gallery-vector-45703245.jpg'} alt=""/>
  <div className="card-body">
    <h1 className="font-bold" >{recipe.title}</h1>
    <div className="absolute bottom-2 left-2">
      <Link to={`/recipe/${recipe.id}`} className="text-blue-800">See more..</Link>
    </div>
  </div>
</div>
    );
};

export default RecipeCard;