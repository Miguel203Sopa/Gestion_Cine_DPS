"use client";

import { useAppSelector } from "@/redux/hooks";
import SalaFila from "./SalaFila";
import "./TablaSalas.css";

export default function TablaSalas() {
    const salas = useAppSelector(state => state.salas.salas);

    return (
        <div className="tabla-salas-container">
            <h2>Tabla de Salas</h2>

            <div className="tabla-salas-wrapper">
                <table className="tabla-salas">
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
                        {salas.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="tabla-vacia">
                                    No hay salas registradas
                                </td>
                            </tr>
                        ) : (
                            salas.map((sala) => (
                                <SalaFila key={sala.id} sala={sala} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}