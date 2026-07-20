"use client";

import './ReservaFila.css'
import { Reserva } from "@/types/reserva";
import {
    removeReserva,
    selectReserva
} from "@/redux/slices/reservasSlice";
import {
    useAppDispatch,
    useAppSelector
} from "@/redux/hooks";

interface Props {
    reserva: Reserva;
}

export default function ReservaFila({ reserva }: Props) {
    const dispatch = useAppDispatch();

    const funciones = useAppSelector(state => state.funciones.funciones);
    const peliculas = useAppSelector(state => state.peliculas.peliculas);

    const funcion = funciones.find(f => f.id === reserva.funcionId);
    const pelicula = peliculas.find(p => p.codigo === funcion?.peliculaCodigo);

    return (
        <tr>
            <td>{reserva.id}</td>
            <td>{pelicula?.nombre}</td>
            <td>{funcion?.fecha}</td>
            <td>{funcion?.hora}</td>
            <td>{reserva.cantidad}</td>
            <td>{reserva.asientos.join(", ")}</td>
            <td className="celda-total">${reserva.total}</td>
            <td>{new Date(reserva.fechaReserva).toLocaleString()}</td>
            <td>
                <div className="acciones-funcion">
                    <button
                        className="btn-editar"
                        onClick={() => dispatch(selectReserva(reserva))}
                    >
                        Editar
                    </button>

                    <button
                        className="btn-eliminar"
                        onClick={() => dispatch(removeReserva(reserva.id))}
                    >
                        Eliminar
                    </button>
                </div>
            </td>
        </tr>
    );
}