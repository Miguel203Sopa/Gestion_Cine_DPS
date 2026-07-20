import React from "react";
import '../components/CSS/Navbar.css'
import ticket from './recursos/ticket.png'
import logo from '../recursos/logo.png'
import movie from './recursos/movie-clapper-open.png'
import Link from "next/link";


const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <ul>
                    <img src="logo"></img>
                <li><Link href="/page">Adm. Peliculas </Link></li>
                <li><Link href="Dashboard">Dasdboard</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar