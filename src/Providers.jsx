import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Providers = (props) => {
      //Etat State

  const [providers, Setproviders] = useState([
    {id : 1, name : "fournisseur"},
    {id : 2, name : "Glowme" },
    {id : 3, name : "Red" }
  ]);

  const navigate = useNavigate();

  const [newprovider, Setnewprovider] = useState("");

  //Comportement 
  const handleDelete = (id) =>{
    console.log(id)
        
    //copie du state
    const providersCopy = [...providers]

    //Manipuler mon state
    const providersCopyUpdated = providersCopy.filter(provider => provider.id !== id)

    //actualiser le state
    Setproviders(providersCopyUpdated);

 
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
    //copie du state 
    const providersCopy = [...providers];
    //manipulation de la copie 
     const id = new Date().getTime();
     const name = newprovider;
     providersCopy.push({id, name});


    //modification du state avec son setter 
     Setproviders(providersCopy);
     Setnewprovider("");
  };
  const handleChange= (event) =>{
    Setnewprovider(event.target.value);

   }

return(
  <div>
    <h1>Manage my providers list</h1>
    <ul>
    {providers.map((provider) =>  
    <li key ={provider.id}>{provider.name} <button onClick ={()=> handleDelete(provider.id)}>X</button></li>) }
    </ul>
    <form action= "submit" onSubmit={handleSubmit}>
    <input value= {newprovider} type = "text" placeholder= "Add new provider..." onChange={handleChange}/>
    <button>Add+</button>
    </form> 
    <button className="link-btn" onClick={()=> navigate("/login")}>Return to Login</button>
</div>)
}