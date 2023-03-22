import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {actions, store}=useContext(Context)
	
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-black wholenav">
		<div className="container-fluid">
		  <Link className="navbar-brand text-white"  to="/">STARWARS APP</Link>
		  <button style={{backgroundColor: "green"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span  className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			  <li className="nav-item">
				<Link className="nav-link text-white"  to="/planets">Planets</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link text-white"  to="/characters">Characters</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link text-white"  to="/films">Films</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link text-white"  to="/starship">Starships</Link>
			  </li>
			  <li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{color: "white"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
				  Favorites{store.favorites.length}
				</a>
				<ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{color: "white", backgroundColor: "black"}}>
					{store.favorites.map(favorite=>(
					<div className="d-flex" key={favorite.index}>	<li className="dropdown-item" style={{color: "white", backgroundColor: "black"}} >{favorite.name}</li>
					<button className="buttfav" onClick={()=>actions.removeFavorites(favorite.index)}>Eliminar</button></div>
					))}
				 
				</ul>
			  </li>
			 
			</ul>
			
		  </div>
		</div>
	  </nav>
	);
};
