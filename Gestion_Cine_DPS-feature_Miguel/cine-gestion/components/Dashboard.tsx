"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import '../components/CSS/Dashboard.css'

export default function Estadictica(){
    const pelis = useAppSelector((state)=>state.peliculas.peliculas);
    const totalpelis = pelis.length
    const datop = pelis.reduce((acc,pelicula)=> acc + pelicula.precio,0)
    const dispoT = pelis.reduce((acc,pelicula)=> acc +(pelicula.disponible ? 1 : 0),0);

    return(
        <>
          <div className="stats-grid">
            <div className="stat-card">
                <span>🎬</span><h3>Total de películas</h3><p>{totalpelis}</p>
            </div>
            <div className="stat-card">
                <span>💰</span><h3>Ingresos generados</h3><p>${datop.toFixed(2)}</p>
            </div>
            <div className="stat-card">
                <span>✅</span><h3>Asientos Disponibles</h3><p>{dispoT}</p>
            </div>
            <div className="stat-card">
                <span>❌</span><h3>Asientos Ocupados</h3><p>{dispoT}</p>
            </div>
             <div className="stat-card">
                <span>🎞️</span><h3>Pelicula mas reservada</h3><p>{dispoT}</p>
            </div>
                <div className="children">
                    <Link href="/">Regreso</Link>
                </div>
        </div>
   </>
    );
}