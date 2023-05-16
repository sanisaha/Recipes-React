import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddRecipe from "../Pages/AddRecipe";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Recipe from "../Pages/Recipe";
import SearchRecipe from "../Pages/SearchRecipe";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/search',
                element: <SearchRecipe></SearchRecipe>,
                loader: ()=>fetch('http://localhost:3030/recipe')
            },
            
            {
                path: '/add',
                element: <AddRecipe></AddRecipe>
            },
            {
                path: '/recipe/:id',
                element: <Recipe></Recipe>,
                loader: ({ params }) => fetch(`http://localhost:3030/recipe/${params.id}`)

            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }

]);