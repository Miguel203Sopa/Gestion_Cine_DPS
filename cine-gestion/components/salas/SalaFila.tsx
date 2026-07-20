"use client";

import { Sala } from "@/types/sala";
import { useAppDispatch } from "@/redux/hooks";
import {
    removeSala,
    selectSala
} from "@/redux/slices/salasSlice";

interface Props {
    sala: Sala;
}

export default function SalaFila({ sala }: Props) {

    const dispatch = useAppDispatch();

    const eliminarSala = (id: string) => {
        dispatch(removeSala(id));
    };

    const editarSala = () => {
        dispatch(selectSala(sala));
    };

    return (

        <tr>

            <td>{sala.id}</td>

            <td>{sala.nombre}</td>

            <td>{sala.tipo_butacas}</td>

            <td>{sala.filas}</td>

            <td>{sala.columnas}</td>

            <td>{sala.asientos.length}</td>

            <td>

                <button onClick={editarSala}>
                    Editar
                </button>

                <button
                    onClick={() => eliminarSala(sala.id)}
                >
                    Eliminar
                </button>

            </td>

        </tr>

    );

}