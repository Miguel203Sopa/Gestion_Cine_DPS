"use client";
import { Pelicula } from "@/types/pelicula";
import { useAppDispatch } from "@/redux/hooks";
import { removePelicula, selectPelicula } from "@/redux/slices/peliculasSlice";

interface Props {
    pelicula: Pelicula;
}

export default function PeliculaFila({ pelicula }: Props) {

    const dispatch = useAppDispatch();

    const eliminarPelicula = (codigo: string) => {
        dispatch(removePelicula(codigo));
    }

    const editarPelicula = (pelicula: Pelicula) => {
    dispatch(selectPelicula(pelicula));
};
    
    return (
        <>
                        <tr key={pelicula.codigo}>
                            <td>{pelicula.codigo}</td>
                            <td>{pelicula.nombre}</td>
                            <td>{pelicula.genero}</td>
                            <td>{pelicula.duracion}</td>
                            <td>{pelicula.clasificacion}</td>
                            <td>{pelicula.sala}</td>
                            <td>{pelicula.precio.toFixed(2)}</td>
                            <td>
                                {pelicula.disponible ? "Sí" : "No"}
                            </td>

                            <td><button onClick={() => eliminarPelicula(pelicula.codigo)}>
                                Eliminar
                            </button></td>

                            <td><button onClick={() => editarPelicula(pelicula)}>
                                Editar
                                </button></td>
                        </tr>
        </>
    );
}