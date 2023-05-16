import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    
    const recipe = useLoaderData();
    const ingredientsArr = Object.entries(recipe.ingredientsResult);
    
    return (
        <div>
            <h1 className='p-5 text-yellow-500 font-semibold'>{recipe.title}</h1>
            <div className='flex flex-col'>
        <div className='flex justify-evenly'>
        <img className='w-96 max-h-96' src={recipe.image} alt=''></img>
        <div className='w-96'>
            <h2 className='text-start text-gray-500'><span className='font-semibold'>Author:</span> {recipe.author}</h2>
            <p className='text-start text-gray-500'><span className='font-semibold'>Description:</span> {recipe.description}</p>
            <table className='w-full mt-3 text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingredientsArr.map((item, index) => <tr
                        key={index}
                        >
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div> 
        <div className='p-2'>
            <h2 className='text-info font-semibold p-2'>Instructions</h2>
            <p>{recipe.instruction}</p>
            

        </div>
        </div>
        </div>
    );
};

export default Recipe;