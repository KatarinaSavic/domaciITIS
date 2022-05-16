import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

/*const Offer = (props) =>{
    return (<tr>
        <td>{props.offer._id}</td>
        <td>{props.offer.dish}</td>
        <td>{props.offer.price}</td>
        <td>
            <Link to={`/edit/${props.offer._id}`}>Edit </Link> | {" "}<p  onClick={()=>{props.onDelete(props.offer._id)}}>Obrisi </p>
        </td>
    </tr>)
}*/

function OfferList(){
    const [offers,setOffers]= useState([]);

    useEffect(()=>{
    axios.get("http://localhost:5000/offers").then(res => setOffers(res.data)).catch(err=>console.log(err));}, []);

    const onDeleteOffer = (id) => {
        axios.delete(`http://localhost:5000/offers/${id}`).then((res)=> setOffers(offers.filter(o=> o._id !== id))).catch(err=>console.log(err));
    }
    const columns = [
        { field: '_id', headerName: '_id', width: 70 },
        { field: 'dish', headerName: 'Jelo', width: 70 },
        { field: 'dishImg', headerName: 'Slika', width: 130 },
        { field: 'price', headerName: 'Cena', width: 130 }
       

      ];



      const rows = offers;
    
    return(
        

        
    <div style={{ height: 400, width: '100%' }}>
    
      <DataGrid components={{
        Action: (props) => (
            <DeleteOutlineTwoToneIcon onClick={()=>{props.onDelete(props.offer._id)}}/>
                
        ),
    }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
}

export default OfferList;

/* <div>
            <h3>Moje ponude</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Jelo</th>
                        <th>Slika</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map(o=>{
                        return <Offer offer={o} onDelete={onDeleteOffer} key={o._id}></Offer>
                    })}
                </tbody>
            </table>
        </div>
 */