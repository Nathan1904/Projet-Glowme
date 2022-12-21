
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Accueil = (props) => {

    const navigate = useNavigate();

    return (
        <div >
            <h2>Welcome to Nathan project for Glowme</h2><br/>
            <h3>Please click on the button bellow</h3>

            <button onClick={()=> navigate("/register")}>Continue</button>
        </div>
    )
}