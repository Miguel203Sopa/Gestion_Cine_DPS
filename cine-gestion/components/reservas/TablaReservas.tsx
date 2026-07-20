"use client";

import { useAppSelector } from "@/redux/hooks";
import ReservaFila from "./ReservaFila";
import "./TablaReservas.css";

export default function TablaReservas() {
    const reservas = useAppSelector(state => state.reservas.reservas);

    return (
        <div className="tabla-reservas-container">
            <h2>Reservas realizadas</h2>

            <div className="tabla-reservas-wrapper">
                <table className="tabla-reservas">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Película</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Boletos</th>
                            <th>Asientos</th>
                            <th>Total</th>
                            <th>Fecha compra</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {reservas.length === 0 ? (
                            <tr>
                                <td colSpan={9} className="tabla-vacia">
                                    No hay reservas registradas
                                </td>
                            </tr>
                        ) : (
                            reservas.map(reserva => (
                                <ReservaFila key={reserva.id} reserva={reserva} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}