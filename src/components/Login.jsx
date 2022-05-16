import React, { useState } from "react";
//import users from "../Users";
import "../App.css";
import { Link } from "react-router-dom";
//import { border } from "@mui/system";
//import Offers from "./Offers"

//import MailOutlineIcon from '@mui/icons-material/MailOutline';
//import PasswordIcon from '@mui/icons-material/Password';

function Login() {
  
  return (
    <div class="container-login">
      <div class="row">
        <div class="col-4 login">
          <h2 class="loginform">Prijavi se</h2>
          <input
         class="loginform"
            name="email"
            type="email"
            
          />
          <input
            
            class="loginform"
            name="password"
            type="password"
            ></input>
         
          <button class="loginform btn-lg" id="login-btn" >
            Prijavi se
          </button>

          <h4 class="propose-register">Prvi put koristis Jedi & Ustedi?</h4>
          <Link to="/signup" class="propose-register">
            Registruj se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
