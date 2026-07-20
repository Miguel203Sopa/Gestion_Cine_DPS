"use client";

import { useState, useEffect } from "react";

import { Funcion } from "@/types/Funcion";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
    addFuncion,
    updateFuncion,
    selectFuncion
} from "@/redux/slices/funcionesSlice";

import './FormularioFuncion.css'

export const funcionInicial: Funcion = {

    id: "",

    peliculaCodigo: "",

    salaId: "",

    fecha: "",

    hora: ""

};



export default function FormularioFuncion() {


    const funciones =
    useAppSelector(
        state => state.funciones.funciones
    );

    const dispatch = useAppDispatch();


    const [funcion, setFuncion] =
        useState<Funcion>(funcionInicial);


    const [error, setError] =
        useState("");



    const peliculas =
        useAppSelector(
            state => state.peliculas.peliculas
        );


    const salas =
        useAppSelector(
            state => state.salas.salas
        );


    const funcionSeleccionada =
        useAppSelector(
            state => state.funciones.funcionSeleccionada
        );



    useEffect(() => {


        if(funcionSeleccionada){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFuncion(funcionSeleccionada);

        }


    },[funcionSeleccionada]);





    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {


        const {name,value} = e.target;


        setFuncion({

            ...funcion,

            [name]:value

        });


    };





   const guardarFuncion = () => {

    setError("");

    if (!funcion.id.trim()) {

        setError("El ID es obligatorio");
        return;

    }

    if (!funcion.peliculaCodigo) {

        setError("Seleccione una película");
        return;

    }

    if (!funcion.salaId) {

        setError("Seleccione una sala");
        return;

    }

    if (!funcion.fecha) {

        setError("Ingrese una fecha");
        return;

    }

    if (!funcion.hora) {

        setError("Ingrese una hora");
        return;

    }

    const existeId = funciones.some(

        f =>

            f.id === funcion.id &&

            f.id !== funcionSeleccionada?.id

    );

    if (existeId) {

        setError("Ya existe una función con ese ID.");
        return;

    }

    const existeHorario = funciones.some(

        f =>

            f.id !== funcionSeleccionada?.id &&

            f.salaId === funcion.salaId &&

            f.fecha === funcion.fecha &&

            f.hora === funcion.hora

    );

    if (existeHorario) {

        setError(
            "Ya existe una función en esa sala para la misma fecha y hora."
        );

        return;

    }

    if (funcionSeleccionada) {

        dispatch(updateFuncion(funcion));

    } else {

        dispatch(addFuncion(funcion));

    }

    setFuncion(funcionInicial);
    dispatch(selectFuncion(null));

};

    return (
        <div className="contPrin">
            
            <h2>
                Gestión de Funciones
            </h2>


<div className=" contGrid">
            <input
                 className="Continput"

                type="text"

                name="id"

                placeholder="ID función"

                value={funcion.id}

                onChange={handleChange}

            />



            <select
                className="ContSelect"

                name="peliculaCodigo"

                value={funcion.peliculaCodigo}

                onChange={handleChange}

            >

                <option value="">
                    Seleccione película
                </option>


                {
                    peliculas.map(pelicula => (

                        <option

                            key={pelicula.codigo}

                            value={pelicula.codigo}

                        >

                            {pelicula.nombre}

                        </option>

                    ))
                }


            </select>




            <select
            className="ContSelect"

                name="salaId"

                value={funcion.salaId}

                onChange={handleChange}

            >

                <option value="">
                    Seleccione sala
                </option>


                {
                    salas.map(sala => (

                        <option

                            key={sala.id}

                            value={sala.id}

                        >

                            {sala.nombre}

                        </option>

                    ))
                }


            </select>




            <input
                className="Continput"

                type="date"

                name="fecha"

                value={funcion.fecha}

                onChange={handleChange}

            />



            <input
               className="Continput"

                type="time"

                name="hora"

                value={funcion.hora}

                onChange={handleChange}

            />



            <button className="contebtn" onClick={guardarFuncion}>

                Guardar

            </button>



            {
                error &&
                <p style={{color:"red"}}>

                    {error}

                </p>
            }
            </div>
        </div>
    );

}