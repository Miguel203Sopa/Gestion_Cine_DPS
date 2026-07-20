"use client";

import { useEffect, useState } from "react";
import { Reserva } from "@/types/reserva";
import {
    useAppDispatch,
    useAppSelector
} from "@/redux/hooks";
import {
    updateReserva,
    selectReserva
} from "@/redux/slices/reservasSlice";
import "./FormularioReserva.css";

const reservaInicial: Reserva = {
    id: "",
    funcionId: "",
    cantidad: 0,
    asientos: [],
    total: 0,
    fechaReserva: ""
};

export default function FormularioReserva() {
    const dispatch = useAppDispatch();

    const reservaSeleccionada = useAppSelector(
        state => state.reservas.reservaSeleccionada
    );

    const funciones = useAppSelector(
        state => state.funciones.funciones
    );

    const [reserva, setReserva] = useState<Reserva>(reservaInicial);

    useEffect(() => {
        if (reservaSeleccionada) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setReserva(reservaSeleccionada);
        }
    }, [reservaSeleccionada]);

    const guardar = () => {
        dispatch(updateReserva(reserva));
        dispatch(selectReserva(null));
        setReserva(reservaInicial);
    };

    return (
        <div className="form-reserva-container">
            <h2>Editar Reserva</h2>

            <div className="form-reserva-grid">
                <select
                    className="form-select"
                    value={reserva.funcionId}
                    onChange={(e) =>
                        setReserva({
                            ...reserva,
                            funcionId: e.target.value
                        })
                    }
                >
                    {funciones.map(funcion => (
                        <option key={funcion.id} value={funcion.id}>
                            {funcion.id}
                        </option>
                    ))}
                </select>

                <div className="form-field">
                    <label className="form-label">Cantidad</label>
                    <input
                        className="form-input"
                        type="number"
                        value={reserva.cantidad}
                        onChange={(e) =>
                            setReserva({
                                ...reserva,
                                cantidad: Number(e.target.value)
                            })
                        }
                    />
                </div>

                <div className="form-field">
                    <label className="form-label">Total</label>
                    <input
                        className="form-input"
                        type="number"
                        value={reserva.total}
                        onChange={(e) =>
                            setReserva({
                                ...reserva,
                                total: Number(e.target.value)
                            })
                        }
                    />
                </div>
            </div>

            <button className="btn-guardar" onClick={guardar}>
                Guardar cambios
            </button>
        </div>
    );
}