"use client";

import {

    useAppSelector

} from "@/redux/hooks";

import ReservaFila from "./ReservaFila";

export default function TablaReservas(){

    const reservas =
        useAppSelector(
            state=>state.reservas.reservas
        );

    return(

        <>

            <h2>

                Reservas realizadas

            </h2>

            <table>

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

                    {

                        reservas.map(reserva=>(

                            <ReservaFila

                                key={reserva.id}

                                reserva={reserva}

                            />

                        ))

                    }

                </tbody>

            </table>

        </>

    );

}