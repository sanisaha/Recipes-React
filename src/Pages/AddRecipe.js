import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddRecipe = () => {

    const [countries, setCountries] = useState([]);
    const [counter, setCounter] = useState(0);
    // const [ingredients, setIngredients] = useState([{quantity:'',ingredient:''}]);
    const ingredients = [];
    const quantities = [];
    const ingredientsResult = {};
    const notify = () => toast('recipe is added now!');

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []); 

    const handleClick = (event) => { 
        event.preventDefault();    
        setCounter(counter + 1);
    } 

    const handleSubmit = (event) => { 
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;    
        const author = form.author.value;    
        const origin= form.origin.value;    
        const description= form.description.value;    
        const image = form.image.value;    
        // const ingredients = [...{quantity : form.quantity.value, ingredient:form.ingredient.value}]
        const quantity = (form.quantity);
        const ingredient = (form.ingredient);

        if(quantity.length > 1 & ingredient.length > 1 ){
            for (const item of quantity) {
                quantities.push(item.value);
            }
            for (const item of ingredient) {
                ingredients.push(item.value);
            }
        } else {
            ingredientsResult[ingredient.value] = quantity.value;
        }

        ingredients.forEach((ingredient, i) => ingredientsResult[ingredient] = quantities[i]);
        const instruction = form.instruction.value;
        const newRecipe = {title, author, origin, description, image, ingredientsResult, instruction};
        axios.post("http://localhost:3030/recipe", newRecipe).then(response=>{
            setCounter(0);
            form.reset();
            notify();
        })
        
    } 
    

    return (
        <div className="bg-gray-200">
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Recipe Form</h1>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Recipe Title
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title" type="text" placeholder="Enter recipe title" name='name'/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Author
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title" type="text" placeholder="Enter author name" name='author'/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Origin
        </label>
        <select className="select select-bordered shadow appearance-none w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='origin'>
        {countries.map(country=>(
            <option 
            key={country.name.common}
            value={country.flags.png}
            >{country.name.common}</option>
        ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ingredients" rows="4" placeholder="Describe recipe" name='description'></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Image
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title" type="text" placeholder="Enter Image Url" name='image'/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ingredients
        </label>
        <div className='flex justify-evenly'>
        <div className=''>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Quantity
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title" type="text" placeholder="Enter quantity" name='quantity'/> 
        </div>
        <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ingredient
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title" type="text" placeholder="Enter ingredient" name='ingredient'/> 
            </div>
        </div>
        <div>
        {
              Array.from(Array(counter)).map((item, index) => (
                <div key={index} className='flex justify-evenly'>
        <div className=''>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Quantity
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title" type="text" placeholder="Enter quantity" name="quantity"/> 
        </div>
        <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ingredient
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title" type="text" placeholder="Enter ingredient" name='ingredient'/> 
            </div>
        </div>
              )) 
            }
            <button onClick={handleClick} className='button btn-info rounded p-1 m-2'>Add More</button>
            
        </div>
        
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Instructions
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="instructions" rows="6" placeholder="Enter instructions" name='instruction'></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="summit">
          Add Recipe
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button">
          Cancel
        </button>
        <ToastContainer/>
      </div>
    </form>
  </div>
  </div>
    );
};

export default AddRecipe;