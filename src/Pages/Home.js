import React from 'react';
import { FaHive, FaInfo, FaSearch, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  
    return (
    <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className='flex items-center justify-center'>
          <h1 className="mb-5 text-5xl font-bold">Welcome </h1>
          <h1 className=' text-3xl ml-4'><FaHive/></h1>
          </div>
          <p className="mb-5">We have a wide collection of food recipes from different parts of the world. We give emphasis on the food taste and it's nutritious value</p>
          <Link to='/search' className="btn btn-primary">Browse Recipe</Link>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full lg:flex-row p-2">
      <div className="grid flex-grow h-32 card bg-green-900 text-white rounded-box place-items-center">
        <Link to='/search'>browse recipes<FaSearch/></Link>
        </div> 
      <div className="divider sm:divider-horizontal"></div> 
      <div className="grid flex-grow h-32 card bg-green-900 text-white rounded-box place-items-center">
      <Link to='/add'>add recipes<FaUpload/></Link>
      </div>
      <div className="divider sm:divider-horizontal"></div> 
      <div className="grid flex-grow h-32 card bg-green-900 text-white rounded-box place-items-center">
      <a href='https://en.bc.fi' target={'_blank'} rel='noreferrer'>info<FaInfo/></a></div>
    </div>
  </div>
    );
};

export default Home;