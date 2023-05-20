import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        
        <div className="navbar bg-yellow-600">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
          <Link to='/search' className="justify-between">
            Recipes
          </Link>
      </li>
      <li><Link to='add'>Add Recipe</Link></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">RecipeHub</Link>
  </div>
  <div className="navbar-end hidden sm:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li tabIndex={0}>
        <Link to='/search'>
          Recipes
        </Link>
      </li>
      <li><Link to='/add'>Add Recipe</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Header;