import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../Components/RecipeCard';

const SearchRecipe = () => {

    const [searchInput, setSearchInput] = useState('');
    const recipes = useLoaderData();
    const searchInputHandler = (e) => {
        setSearchInput(e.target.value.toLowerCase());
      }
    
      const searchFilter = recipes.filter(item => {
        return item.title.toLowerCase().includes(searchInput)
      })

    
      console.log(searchInput);

    

    return (
        <div>
            <div className="form-control w-full max-w-xs mx-auto">
  <label className="label">
    <span className="label-text">Search for Recipe: </span>
  </label>
  <input onChange={searchInputHandler} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</div>
            <div className='p-5'>
                <h1 className='p-4'>Our Recipes</h1>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
                    {searchFilter.map(recipe => (
                        <RecipeCard
                        key={recipe.id}
                        recipe = {recipe}
                        ></RecipeCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchRecipe;