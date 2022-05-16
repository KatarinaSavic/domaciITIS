import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Paper,Container,TextField,Box,Button} from "@mui/material";

function CreateOffer() {
  //const [users, setUsers] = useState([]);
  const [dish, setDish] = useState("");
  const [dishImg, setDishImg] = useState("");
  const [price, setPrice]= useState("");
  const [restaurant, setRestaurant] = useState("");
  const [city, setCity]= useState("");
    

 /* useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data.map((user) => user.name)))
      .catch((err) => console.log(err));
  });*/

  const onChangeDish = (e)=>{
      setDish(e.target.value);
  }
  const onChangeDishImg = (e)=>{
    setDishImg(e.target.value);

}
 const onChangePrice = (e)=>{
      setPrice(e.target.value);
  }
  const onChangeRestaurant = (e)=>{
    setRestaurant(e.target.value);
}
const onChangeCity = (e)=>{
    setCity(e.target.value);
}
  const onSubmit = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:5000/offers", {dish, dishImg, price, restaurant, city});


  }
  return <Container maxWidth="sm">
  <Paper elevation={3}>
      <h3>Dodajte danasnju ponudu</h3>
      <form onSubmit={onSubmit}>
      <Box m={2} pt={3}> <TextField label="Ime jela" color="success" focused onChange={onChangeDish} value={dish} /></Box>
      <Box m={2} pt={3}> <TextField label="Slika jela" color="success" focused onChange={onChangeDishImg} value={dishImg} /></Box>
      <Box m={2} pt={3}><TextField label="Cena" color="success" focused  onChange={onChangePrice} value={price} /></Box>
      <Box m={2} pt={3}><TextField label="Restoran" color="success" focused onChange={onChangeRestaurant} value={restaurant}/></Box>
      <Box m={2} pt={3}><TextField label="Grad" color="success" focused onChange={onChangeCity} value={city} /></Box>
      <Box m={2} pt={3}>
      <Button variant="contained" type="submit" color="success">Sacuvaj</Button>
      </Box> 
          <Link to="/restaurantoffers" class="propose-register">
            Pogledajte aktivne ponude
          </Link>
      </form>
      </Paper> 
  </Container>;
}

export default CreateOffer;



/*
<div>
      <h3>Dodajte danasnju ponudu</h3>
      <form onSubmit={onSubmit}>
          <label>Ime jela:</label>
          <input type="text" onChange={onChangeDish} value={dish}></input>
          <label>Slika jela:</label>
          <input type="text"  onChange={onChangeDishImg} value={dishImg}></input>
          <label>Cena:</label>
          <input type="text"  onChange={onChangePrice} value={price}></input>
          <label>Restoran:</label>
          <input type="text"  onChange={onChangeRestaurant} value={restaurant}></input>
          <label>Grad:</label>
          <input type="text"  onChange={onChangeCity} value={city}></input>
          <button type="submit">Sacuvaj</button>
          <Link to="/restaurantoffers" class="propose-register">
            Pogledajte aktivne ponude
          </Link>
      </form>
  </div>;

*/ 
