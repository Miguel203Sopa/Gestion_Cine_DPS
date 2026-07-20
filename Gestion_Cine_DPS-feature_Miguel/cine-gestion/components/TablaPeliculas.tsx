"use client";
import { useState } from "react";
import PeliculaFila from "./PeliculaFila";
import BuscadorPelicula from "./BuscadorPeliculas";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import "../components/CSS/TablaPeliulas.css"


export default function TablaPeliculas() {

    const [search, setSearch] = useState("");

    const peliculas = useAppSelector(
        (state) => state.peliculas.peliculas
    );

    const peliculasFiltradas = peliculas.filter((pelicula) => {
        const texto = search.toLowerCase().trim();

        return (
            pelicula.nombre.toLowerCase().includes(texto) ||
            pelicula.sala.toLowerCase().includes(texto) ||
            pelicula.genero.toLowerCase().includes(texto)||
            pelicula.clasificacion.toLowerCase().includes(texto)
        );
    });

    return (
      <div className="contenedor">

            <h2>Tabla de Peliculas</h2>

            <BuscadorPelicula busqueda={search} setSearch={setSearch} />

            <table className="tablapelis">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>Duración</th>
                        <th>Clasificación</th>
                        <th>Sala</th>
                        <th>Precio</th>
                        <th>Disponible</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculasFiltradas.length === 0 ? (
                        <tr>
                            <td colSpan={9} style={{ textAlign: "center" }}>
                                No se encontraron películas
                            </td>
                        </tr>
                    ) : (
                        peliculasFiltradas.map((pelicula) => (
                            <PeliculaFila
                                key={pelicula.codigo}
                                pelicula={pelicula}
                            />
                        ))
                    )}
                </tbody>
            </table>
      </div>
    );
}