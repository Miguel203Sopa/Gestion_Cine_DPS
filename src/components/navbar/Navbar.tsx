import React from "react";
import './Navbar.css'
import ticket from './recursos/ticket.png'
import movie from './recursos/movie-clapper-open.png'
import tipo from '../../recursos/logo.png'
import cine from '../../recursos/Its Time Film GIF.gif'


const Navbar = () => {
    return(
        <div className='Maestro'>
            <div className="navbar">
                <ul>
                <li>Adm. Peliculas</li>
                <img src={tipo.src} alt="" className="logo"/> 
                <li>Dashboard</li>
            </ul>
            </div>
            <div className="banner">
                <section>
                    <img src={cine.src} alt="" className="cinema" />
                    <h1>El cine mas cerca de ti</h1>
                    <hr></hr>
                    <p>Las mejores peliculas en un solo lugar</p>
                    <button className="AgrePeli">Hacer reserva</button>
                </section>
            </div>
        </div>
    )
}

export default Navbar