"use client";

import { useAppSelector } from "@/redux/hooks";
import SalaFila from "./SalaFila";

export default function TablaSalas() {

    const salas = useAppSelector(
        state => state.salas.salas
    );

    return (

        <>

            <h2>Tabla de Salas</h2>

            <table>

                <thead>

                    <tr>

                        <th>Id</th>

                        <th>Nombre</th>

                        <th>Tipo de Butaca</th>

                        <th>Filas</th>

                        <th>Columnas</th>

                        <th>Cantidad de Asientos</th>

                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {salas.map((sala) => (

                        <SalaFila

                            key={sala.id}

                            sala={sala}

                        />

                    ))}

                </tbody>

            </table>

        </>

    );

}