

"use client";

import "./Dashboard.css";

import { useAppSelector } from "@/redux/hooks";

import TarjetaEstadistica from "./TarjetaEstadistica";

import Cartelera from "./Cartelera";

export default function Dashboard(){

    const peliculas =
        useAppSelector(
            state=>state.peliculas.peliculas
        );

    const funciones =
        useAppSelector(
            state=>state.funciones.funciones
        );

    const salas =
        useAppSelector(
            state=>state.salas.salas
        );

    const reservas =
        useAppSelector(
            state=>state.reservas.reservas
        );



    const totalPeliculas =
        peliculas.length;



    const totalFunciones =
        funciones.length;



    const boletosVendidos =
        reservas.reduce(

            (total,reserva)=>

                total + reserva.cantidad,

            0

        );



    const asientosTotales =
        salas.reduce(

            (total,sala)=>

                total + sala.asientos.length,

            0

        );



    const asientosOcupados =
        reservas.reduce(

            (total,reserva)=>

                total + reserva.asientos.length,

            0

        );



    const asientosDisponibles =

        asientosTotales -

        asientosOcupados;



    const ingresos =

        reservas.reduce(

            (total,reserva)=>

                total + reserva.total,

            0

        );



    const contadorPeliculas:Record<string,number> = {};



    reservas.forEach(reserva=>{

        const funcion =

            funciones.find(

                f=>f.id===reserva.funcionId

            );



        if(!funcion){

            return;

        }



        contadorPeliculas[funcion.peliculaCodigo] =

            (contadorPeliculas[funcion.peliculaCodigo] ?? 0)

            +

            reserva.cantidad;

    });



    let peliculaMasReservada =

        "Sin reservas";



    let mayor = 0;



    Object.entries(

        contadorPeliculas

    ).forEach(([codigo,cantidad])=>{

        if(cantidad > mayor){

            mayor = cantidad;

            peliculaMasReservada =

                peliculas.find(

                    pelicula=>

                        pelicula.codigo===codigo

                )?.nombre ?? "Desconocida";

        }

    });



    return(

        <>

            <h1>

                Dashboard

            </h1>



            <div className="dashboard-grid">

                <TarjetaEstadistica

                    titulo="Películas"

                    valor={totalPeliculas}

                    icono="🎬"

                />



                <TarjetaEstadistica

                    titulo="Funciones"

                    valor={totalFunciones}

                    icono="🎞️"

                />



                <TarjetaEstadistica

                    titulo="Boletos"

                    valor={boletosVendidos}

                    icono="🎟️"

                />



                <TarjetaEstadistica

                    titulo="Disponibles"

                    valor={asientosDisponibles}

                    icono="💺"

                />



                <TarjetaEstadistica

                    titulo="Ocupados"

                    valor={asientosOcupados}

                    icono="❌"

                />



                <TarjetaEstadistica

                    titulo="Ingresos"

                    valor={`$${ingresos}`}

                    icono="💵"

                />



                <TarjetaEstadistica

                    titulo="Más reservada"

                    valor={peliculaMasReservada}

                    icono="🏆"

                />

            </div>



            <Cartelera/>

        </>

    );

}