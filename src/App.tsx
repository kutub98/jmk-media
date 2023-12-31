import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RouterProvider} from "react-router-dom"
import { routes } from './Components/Routes/Route';

function App() {
  return (
    <div className="App">
     <RouterProvider router ={routes}></RouterProvider>
    </div>
  );
}

export default App;
