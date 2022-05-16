import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//import {  useHistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Paper,Container,TextField,Box,Button} from "@mui/material";

function EditOffer() {
  //const [users, setUsers] = useState([]); dovuci restorane
  const [dish, setDish] = useState("");
  const [dishImg, setDishImg] = useState("");
  const [price, setPrice] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [city, setCity] = useState("");
  const [offers, setOffers] = useState([]);

  const { id } = useParams(); //izvlaci sve parametre iz URL-a
  //const history = useHistory();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/offers" + id)
      .then((res) => {
        setDish(res.data.dish);
        setDishImg(res.data.dishImg);
        setPrice(res.data.price);
        setRestaurant(res.data.restaurant);
        setCity(res.data.city);
      })
      .catch((err) => console.log(err));
  });

 /* axios.get("http://localhost:5000/offers").then((response)=>{
      setOffers(response.data.map((offer)=> offer.dish));
  }).catch((error)=> {console.log(error);}, []);*/

  const onChangeDish = (e) => {
    setDish(e.target.value);
  };
  const onChangeDishImg = (e) => {
    setDishImg(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeRestaurant = (e) => {
    setRestaurant(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/offers", {
      dish,
      dishImg,
      price,
      restaurant,
      city,
    });

    //history.push("/");
    navigate("/restaurantoffers");
  };
  return (
    <Container maxWidth="sm">
  <Paper elevation={3}>
      <h3>Promenite izabrano jelo</h3>
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
  </Container>
  );
}

export default EditOffer;
