"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Asiento } from "../types/Asiento";
import {
    seleccionarAsiento,
    confirmarReserva,
    cancelarSeleccion,
} from '../redux/slices/SalaSlice';

export default function MapaAsientos() {
    const dispatch = useDispatch();

    const asientos = useSelector((state: RootState) => state.sala.asientos);
    const reservados = useSelector((state: RootState) => state.sala.reservados);

    const seleccionados = asientos.filter((a: { estado: string; }) => a.estado === "elegido");

    const getColor = (estado: string) => {
        switch (estado) {
            case "ocupado": return "#9e9e9e";
            case "elegido": return "#ff9800";
            default: return "#4caf50";
        }
    };

    const agruparPorFila = (asientos: Asiento[]) => {
        return asientos.reduce((grupos, asiento) => {
            const fila = asiento.numero.charAt(0); 
            if (!grupos[fila]) grupos[fila] = [];
            grupos[fila].push(asiento);
            return grupos;
        }, {} as Record<string, Asiento[]>);
    };

    return (
        <div>
            <h2>Selecciona tus asientos</h2>

            <div >
                <div>
                    <span/>
                    Libre
                </div>
                <div>
                    <span />
                    Elegido
                </div>
                <div>
                    <span/>
                    Ocupado
                </div>
            </div>

            {/* Mapa de asientos agrupado por fila */}
            <div>
                {Object.entries(agruparPorFila(asientos)).map(([fila, asientosFila]) => (
                    <div key={fila}>
                        {asientosFila.map((asiento) => (
                            <button
                                key={asiento.id}
                                disabled={asiento.estado === "ocupado"}
                                onClick={() => dispatch(seleccionarAsiento(asiento.id))}>
                                {asiento.numero}
                            </button>
                        ))}
                    </div>
                ))}
            </div>

            <div>
                <strong>Asientos seleccionados: </strong>
                {seleccionados.length === 0 ? "Ninguno" : seleccionados.map(a => a.numero).join(", ")}
            </div>

            <div>
                <strong>Asientos reservados (confirmados): </strong>
                {reservados.length === 0 ? "Aún no hay reservas confirmadas" : reservados.join(", ")}
            </div>

            <div>
                <button
                    disabled={seleccionados.length === 0}
                    onClick={() => dispatch(confirmarReserva())}
                >
                    Confirmar reserva
                </button>

                <button
                    disabled={seleccionados.length === 0}
                    onClick={() => dispatch(cancelarSeleccion())}
                >
                    Cancelar selección
                </button>
            </div>
        </div>
    );
}