"use client";

import { Reserva } from "@/types/reserva";

import {

    removeReserva,

    selectReserva

} from "@/redux/slices/reservasSlice";

import {

    useAppDispatch,

    useAppSelector

} from "@/redux/hooks";

interface Props{

    reserva:Reserva;

}

export default function ReservaFila({

    reserva

}:Props){

    const dispatch = useAppDispatch();

    const funciones =
        useAppSelector(
            state=>state.funciones.funciones
        );

    const peliculas =
        useAppSelector(
            state=>state.peliculas.peliculas
        );

    const funcion =
        funciones.find(
            f=>f.id===reserva.funcionId
        );

    const pelicula =
        peliculas.find(
            p=>p.codigo===funcion?.peliculaCodigo
        );

    return(

        <tr>

            <td>{reserva.id}</td>

            <td>{pelicula?.nombre}</td>

            <td>{funcion?.fecha}</td>

            <td>{funcion?.hora}</td>

            <td>{reserva.cantidad}</td>

            <td>{reserva.asientos.join(", ")}</td>

            <td>${reserva.total}</td>

            <td>

                {new Date(
                    reserva.fechaReserva
                ).toLocaleString()}

            </td>

            <td>

                <button

                    onClick={()=>

                        dispatch(
                            selectReserva(reserva)
                        )

                    }

                >

                    Editar

                </button>

                <button

                    onClick={()=>

                        dispatch(
                            removeReserva(
                                reserva.id
                            )
                        )

                    }

                >

                    Eliminar

                </button>

            </td>

        </tr>

    );

}