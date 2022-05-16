
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOffer from './components/CreateOffer';
import Menu from "./components/Menu";
import Login from './components/Login';
import Signup from './components/Signup';
import OfferList from './components/OffersList';
import EditOffer from "./components/EditOffer";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<CreateOffer />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/restaurantoffers" element={<OfferList />} />
      <Route path="/edit/:id" element={<EditOffer/>} />
    </Routes>
    
  </BrowserRouter>
    
    </div>
  );
}

export default App;
//<Route path="/editoffer" element={<EditOffer/>}/>
/*<Route index element={<Home />} /> 
<Route path="/restorani" element={<Offers />}/> 
<Route path="/partner" element={<Partner />}/>
<Route path="/login" element={<Login />} />
<Route path="/kontakt" element={<Contact />} />*/