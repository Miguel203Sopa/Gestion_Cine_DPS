"use client";

import { useState } from "react";
import { Funcion } from "@/types/Funcion";
import { useAppSelector } from "@/redux/hooks";
import ModalReserva from "@/components/reservas/ModalReserva";
import "./FuncionCard.css";

interface Props {
    funcion: Funcion;
}

export default function FuncionCard({ funcion }: Props) {
    const [mostrarModal, setMostrarModal] = useState(false);

    const peliculas = useAppSelector(state => state.peliculas.peliculas);
    const salas = useAppSelector(state => state.salas.salas);

    const pelicula = peliculas.find(
        pelicula => pelicula.codigo === funcion.peliculaCodigo
    );

    const sala = salas.find(sala => sala.id === funcion.salaId);

    if (!pelicula || !sala) {
        return null;
    }

    return (
        <div className="funcion-card">
            <h2 className="funcion-titulo">{pelicula.nombre}</h2>

            <div className="funcion-detalles">
                <p><span className="detalle-label">Sala:</span> {sala.nombre}</p>
                <p><span className="detalle-label">Fecha:</span> {funcion.fecha}</p>
                <p><span className="detalle-label">Hora:</span> {funcion.hora}</p>
                <p className="funcion-precio">${pelicula.precio}</p>
            </div>

            <button className="btn-comprar" onClick={() => setMostrarModal(true)}>
                🎟️ Comprar boleto
            </button>

            {mostrarModal && (
                <ModalReserva
                    funcion={funcion}
                    cerrar={() => setMostrarModal(false)}
                />
            )}
        </div>
    );
}