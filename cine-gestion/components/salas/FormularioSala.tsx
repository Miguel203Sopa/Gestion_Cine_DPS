"use client";

import { useState, useEffect } from "react";
import { Sala } from "@/types/sala";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
    addSala,
    updateSala,
    selectSala,
} from "@/redux/slices/salasSlice";
import { generarAsientos } from "@/helpers/generarAsientos";
import "./FormularioSala.css";

export const salaInicial: Sala = {
    id: "",
    nombre: "",
    tipo_butacas: "",
    filas: 0,
    columnas: 0,
    asientos: [],
};

export default function FormularioSala() {
    const dispatch = useAppDispatch();
    const [error, setError] = useState("");
    const [sala, setSala] = useState<Sala>(salaInicial);

    const salas = useAppSelector(state => state.salas.salas);
    const salaSeleccionada = useAppSelector(state => state.salas.salaSeleccionada);

    useEffect(() => {
        if (salaSeleccionada) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSala(salaSeleccionada);
        }
    }, [salaSeleccionada]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (e.target instanceof HTMLInputElement) {
            setSala({
                ...sala,
                [name]: e.target.type === "number" ? Number(value) : value,
            });
        } else {
            setSala({
                ...sala,
                [name]: value,
            });
        }
    };

    const guardarSala = () => {
        setError("");

        const existe = salas.some(
            s => s.id === sala.id && s.id !== salaSeleccionada?.id
        );

        if (!sala.id.trim()) {
            setError("El Id de la sala es obligatorio.");
            return;
        }

        if (!sala.nombre.trim()) {
            setError("El nombre de la sala es obligatorio.");
            return;
        }

        if (!sala.tipo_butacas.trim()) {
            setError("Debe seleccionar un tipo de butaca.");
            return;
        }

        if (sala.filas <= 0) {
            setError("Debe ingresar una cantidad válida de filas.");
            return;
        }

        if (sala.columnas <= 0) {
            setError("Debe ingresar una cantidad válida de columnas.");
            return;
        }

        if (existe) {
            setError("Ya existe una sala con ese Id.");
            return;
        }

        const asientos = salaSeleccionada &&
            salaSeleccionada.filas === sala.filas &&
            salaSeleccionada.columnas === sala.columnas
            ? salaSeleccionada.asientos
            : generarAsientos(sala.filas, sala.columnas);

        if (salaSeleccionada) {
            dispatch(updateSala({ ...sala, asientos }));
        } else {
            dispatch(addSala({ ...sala, asientos }));
        }

        setSala(salaInicial);
        dispatch(selectSala(null));
    };

    return (
        <div className="form-sala-container">
            <h2>Gestión de Salas</h2>

            <div className="form-sala-grid">
                <input
                    className="form-input"
                    type="text"
                    name="id"
                    placeholder="Id de la sala"
                    value={sala.id}
                    onChange={handleChange}
                />

                <input
                    className="form-input"
                    type="text"
                    name="nombre"
                    placeholder="Nombre de la sala"
                    value={sala.nombre}
                    onChange={handleChange}
                />

                <select
                    className="form-select"
                    name="tipo_butacas"
                    value={sala.tipo_butacas}
                    onChange={handleChange}
                >
                    <option value="">Seleccione un tipo de butaca</option>
                    <option value="Tradicionales">Tradicionales</option>
                    <option value="Exclusivas">Exclusivas</option>
                    <option value="Experiencia-4D">Experiencia 4D</option>
                </select>

                <input
                    className="form-input"
                    type="number"
                    name="filas"
                    placeholder="Cantidad de filas"
                    value={sala.filas}
                    onChange={handleChange}
                />

                <input
                    className="form-input"
                    type="number"
                    name="columnas"
                    placeholder="Cantidad de columnas"
                    value={sala.columnas}
                    onChange={handleChange}
                />
            </div>

            <button className="btn-guardar" onClick={guardarSala}>
                Guardar
            </button>

            {error && <p className="form-error">{error}</p>}
        </div>
    );
}