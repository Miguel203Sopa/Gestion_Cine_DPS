"use client";

import MapaAsientos from "@/components/salas/MapaAsientos";
import { Funcion } from "@/types/Funcion";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addReserva } from "@/redux/slices/reservasSlice";


interface Props {

    funcion: Funcion;

    cerrar: () => void;

}



export default function ModalReserva({
    funcion,
    cerrar
}: Props){

    const dispatch = useAppDispatch();

    const [asientosSeleccionados, setAsientosSeleccionados] =
    useState<string[]>([]);

    const peliculas =
        useAppSelector(
            state => state.peliculas.peliculas
    );

    const pelicula =
        peliculas.find(
            pelicula =>
                pelicula.codigo === funcion.peliculaCodigo
        );

    const total =
        (pelicula?.precio ?? 0)
        *
    asientosSeleccionados.length;

    const confirmarReserva = () => {

    if (asientosSeleccionados.length === 0) {

        return;

    }

    dispatch(

        addReserva({

            id: crypto.randomUUID(),

            funcionId: funcion.id,

            cantidad: asientosSeleccionados.length,

            asientos: asientosSeleccionados,

            total,

            fechaReserva: new Date().toISOString()

        })

    );

    cerrar();

};





    return (

        <div
            className="modal-fondo"
        >


            <div
                className="modal-contenido"
            >


                <button
                    onClick={cerrar}
                >
                    X
                </button>



                <h2>
                    Comprar boleto
                </h2>



                <MapaAsientos
                    funcion={funcion}
                    asientosSeleccionados={asientosSeleccionados}
                    setAsientosSeleccionados={setAsientosSeleccionados}
                />
                <h3>

                    Cantidad:

                    {" "}

                    {asientosSeleccionados.length}

                    </h3>

                    <h3>

                    Total:

                    {" "}

                    ${total}

                    </h3>

                    <button

                        onClick={confirmarReserva}

                    >

                        Confirmar compra

                    </button>


            </div>


        </div>

    );

}