"use client";
import PeliculaFila from "@/components/peliculas/PeliculaFila";
import { useAppSelector} from "@/redux/hooks";
import './TablaPeliculas.css'

export default function TablaPeliculas() {

    const peliculas = useAppSelector(
        (state) => state.peliculas.peliculas
    );


    return(
        <>
        <div className="contenedor">

            <h2>Tabla de Peliculas</h2>
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

                    {peliculas.map((pelicula)=>(

                        <PeliculaFila

                            key={pelicula.codigo}

                            pelicula={pelicula}

                        />

                    ))}


                </tbody>

            </table>
            </div>
        </>
    );

}