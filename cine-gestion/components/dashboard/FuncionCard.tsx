"use client";

import { Funcion } from "@/types/Funcion";
import { useAppSelector } from "@/redux/hooks";


interface Props {

    funcion: Funcion;

}



export default function FuncionCard({
    funcion
}: Props){



    const peliculas =
        useAppSelector(
            state => state.peliculas.peliculas
        );


    const salas =
        useAppSelector(
            state => state.salas.salas
        );



    const pelicula =
        peliculas.find(
            pelicula =>
                pelicula.codigo === funcion.peliculaCodigo
        );



    const sala =
        salas.find(
            sala =>
                sala.id === funcion.salaId
        );




    if(!pelicula || !sala){

        return null;

    }




    return (

        <div className="funcion-card">


            <h2>
                {pelicula.nombre}
            </h2>


            <p>
                Sala:
                {" "}
                {sala.nombre}
            </p>



            <p>
                Fecha:
                {" "}
                {funcion.fecha}
            </p>



            <p>
                Hora:
                {" "}
                {funcion.hora}
            </p>



            <p>
                Precio:
                {" "}
                ${pelicula.precio}
            </p>



            <button>

                Comprar boleto

            </button>



        </div>

    );

}