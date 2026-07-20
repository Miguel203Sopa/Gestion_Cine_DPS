"use client";

import { useState } from "react";
import {Pantalla} from "@/types/pantalla"

import Navbar from "@/components/navbar/Navbar";

import FormularioPelicula from "@/components/peliculas/FormularioPelicula";
import TablaPeliculas from "@/components/peliculas/TablaPeliculas";
import FormularioSala from "./salas/FormularioSala";
import TablaSalas from "@/components/salas/TablaSalas";
import FormularioFuncion from "./funciones/FormularioFuncion";
import TablaFunciones from "./funciones/TablaFunciones";
import MapaAsientos from "@/components/salas/MapaAsientos";
import Cartelera from "@/components/dashboard/Cartelera";

export default function Tabs() {

    const [pantalla, setPantalla] = useState<Pantalla>("peliculas");

    return (
        <>

            <Navbar
                pantalla={pantalla}
                setPantalla={setPantalla}
            />

            {pantalla === "peliculas" && (
                <>
                    <FormularioPelicula />
                    <TablaPeliculas />
                </>
            )}

            {pantalla === "salas" && (
                <>
                    <FormularioSala />
                    <TablaSalas />
                </>
            )}

            {pantalla === "reservas" && (
                <>
                    <h2>Reservas</h2>
                </>
            )}

            {pantalla === "funciones" && (
                <>
                    <FormularioFuncion/>
                    <TablaFunciones />
                  
                </>
            )}

            {pantalla === "dashboard" && (
                <>
                    <h2>Dashboard</h2>
                     <Cartelera />
                </>
            )}

        </>
    );
}