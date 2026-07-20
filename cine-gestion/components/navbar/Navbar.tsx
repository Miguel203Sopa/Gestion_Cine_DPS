import React from "react";

//css
import './Navbar.css'

//componentes
import  { Pantalla } from '@/types/pantalla'

//Recursos
import ticket from './recursos/ticket.png'
import movie from './recursos/movie-clapper-open.png'
import tipo from '../../recursos/logo.png'
import cine from '../../recursos/Its Time Film GIF.gif'

interface NavbarProps{
    pantalla: Pantalla;
    setPantalla: React.Dispatch<React.SetStateAction<Pantalla>>;
}




const Navbar =  ({ pantalla, setPantalla }: NavbarProps) => {

    
    return(
        <div className='Maestro'>
            <div className="navbar">
                <ul>
                    <img src={tipo.src} alt="" className="logo"/> 
                    
                    <li
                        className={pantalla === "peliculas" ? "activo" : ""}
                        onClick={() => setPantalla("peliculas")}
                    >
                        Adm. Películas
                    </li>

                    <li 
                        className={pantalla === "salas" ? "activo" : ""}
                        onClick={() => setPantalla("salas")}>
                        Salas
                    </li>

                    <li className={pantalla === "reservas" ? "activo" : ""}
                        onClick={() => setPantalla("reservas")}>
                        Reservas
                    </li>

                    <li 
                        className={pantalla === "dashboard" ? "activo" : ""}
                        onClick={() => setPantalla("dashboard")}>
                        Dashboard
                    </li>


                </ul>
            </div>
            <div className="banner">
                <section>
                    <img src={cine.src} alt="" className="cinema" />
                    <h1>El cine mas cerca de ti</h1>
                    <hr></hr>
                    <p>Las mejores peliculas en un solo lugar</p>
                    
                    <button
                        className="AgrePeli"
                        onClick={() => setPantalla("reservas")}
                    >
                        Hacer reserva
                    </button>
                </section>
            </div>
        </div>
    )
}

export default Navbar