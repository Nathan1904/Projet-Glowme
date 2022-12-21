import { useState } from "react";
import{Routes, Route} from "react-router-dom"
import { Register } from "./Register"
import { Login } from "./Login"
import { Providers } from "./Providers";
import { Accueil } from "./Accueil";

function App(){


//   //Affichage (render)

  return (
 

   <div >
    <Routes>
    <Route path="/" element={<Accueil/>} />
    <Route path="/:id" element ={<Login/>} />
    <Route path="/register" element ={<Register/>} />
     <Route path="/providers" element ={<Providers/>} />
     <Route path="/login" element ={<Login/>} />

   </Routes>;
  { 

   
} 
  </div>)

};

export default App;