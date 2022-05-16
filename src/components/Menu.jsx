import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Menu() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <h2>Jedi & ustedi</h2>
        <Link to="/" class="nav-item">
          O nama
        </Link>
        <Link to="/restorani" class="nav-item">
          Restorani
        </Link>
        <Link to="/partner" class="nav-item">
          Postani partner
        </Link>
        <Link to="/login" class="nav-item">
          Prijavi se
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
