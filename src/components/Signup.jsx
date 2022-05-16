import React, { useEffect, useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType]= useState("");
  
    

 const onChangeName = (e)=>{
      setName(e.target.value);
  }
  const onChangeEmail = (e)=>{
    setEmail(e.target.value);

}
 const onChangePassword = (e)=>{
      setPassword(e.target.value);
      setType("buyer");
  }
  // setType("buyer") Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  

  const onSubmit = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:5000/users", {name,email,password,type});


  }
  return <div>
      <h3>Postani korisnik i spasi hranu vec danas</h3>
      <form onSubmit={onSubmit}>
          <label>Ime:</label>
          <input type="text" onChange={onChangeName} value={name}></input>
          <label>Email:</label>
          <input type="text"  onChange={onChangeEmail} value={email}></input>
          <label>Lozinka:</label>
          <input type="text"  onChange={onChangePassword} value={password}></input>
          <button type="submit">Sacuvaj</button>
      </form>
  </div>;
}

export default Signup;
