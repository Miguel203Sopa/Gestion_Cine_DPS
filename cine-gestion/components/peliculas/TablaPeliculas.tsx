"use client";
import PeliculaFila from "@/components/peliculas/PeliculaFila";
import { useAppSelector} from "@/redux/hooks";
import { useState } from "react";

export default function TablaPeliculas() {



    
    const peliculas = useAppSelector(
        (state) => state.peliculas.peliculas
    );

    const funciones = useAppSelector(
    state => state.funciones.funciones
);


const salas = useAppSelector(
    state => state.salas.salas
);

const [busqueda, setBusqueda] = useState("");

const [generoFiltro, setGeneroFiltro] = useState("");

const [clasificacionFiltro, setClasificacionFiltro] = useState("");

const [estadoFiltro, setEstadoFiltro] = useState("");

const [salaFiltro, setSalaFiltro] = useState("");


    const peliculasFiltradas = peliculas.filter(pelicula => {

    const texto = busqueda.toLowerCase();

    const coincideTexto =

    pelicula.nombre.toLowerCase().includes(texto) ||

    pelicula.genero.toLowerCase().includes(texto) ||

    pelicula.clasificacion.toLowerCase().includes(texto);



    const coincideGenero =

        !generoFiltro ||

        pelicula.genero === generoFiltro;



    const coincideClasificacion =

        !clasificacionFiltro ||

        pelicula.clasificacion === clasificacionFiltro;



    const coincideEstado =

        !estadoFiltro ||

        (estadoFiltro === "Disponible"
            ? pelicula.disponible
            : !pelicula.disponible);



    const coincideSala =

        !salaFiltro ||

        funciones.some(

            funcion =>

                funcion.peliculaCodigo === pelicula.codigo &&

                funcion.salaId === salaFiltro

        );



    return (

        coincideTexto &&

        coincideGenero &&

        coincideClasificacion &&

        coincideEstado &&

        coincideSala

    );

});


    return(
        <>
            <input
    type="text"
    placeholder="Buscar..."
    value={busqueda}
    onChange={(e)=>setBusqueda(e.target.value)}
/>

<select
    value={generoFiltro}
    onChange={(e)=>setGeneroFiltro(e.target.value)}
>
    <option value="">Todos los géneros</option>
    <option value="Accion">Acción</option>
    <option value="Drama">Drama</option>
    <option value="Comedia">Comedia</option>
    <option value="Terror">Terror</option>
    <option value="Thriller">Thriller</option>
</select>

<select
    value={clasificacionFiltro}
    onChange={(e)=>setClasificacionFiltro(e.target.value)}
>
    <option value="">Todas</option>
    <option value="G">G</option>
    <option value="PG">PG</option>
    <option value="PG-13">PG-13</option>
    <option value="NC-17">NC-17</option>
    <option value="NR">NR</option>
</select>

<select
    value={estadoFiltro}
    onChange={(e)=>setEstadoFiltro(e.target.value)}
>
    <option value="">Todos</option>
    <option value="Disponible">Disponible</option>
    <option value="No disponible">No disponible</option>
</select>

<select
    value={salaFiltro}
    onChange={(e)=>setSalaFiltro(e.target.value)}
>
    <option value="">Todas las salas</option>

    {
        salas.map(sala => (

            <option
                key={sala.id}
                value={sala.id}
            >
                {sala.nombre}
            </option>

        ))
    }

</select>
           
            <h2>Tabla de Peliculas</h2>
            <table>
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

                    {peliculasFiltradas.map((pelicula)=>(

                        <PeliculaFila

                            key={pelicula.codigo}

                            pelicula={pelicula}

                        />

                    ))}


                </tbody>

            </table>
        </>
    );

}