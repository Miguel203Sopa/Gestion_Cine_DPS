"use client";

import { useState, useEffect } from "react";

import { Funcion } from "@/types/Funcion";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
    addFuncion,
    updateFuncion,
    selectFuncion
} from "@/redux/slices/funcionesSlice";


export const funcionInicial: Funcion = {

    id: "",

    peliculaCodigo: "",

    salaId: "",

    fecha: "",

    hora: ""

};



export default function FormularioFuncion() {


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



        if(!funcion.id.trim()){

            setError("El ID es obligatorio");

            return;

        }


        if(!funcion.peliculaCodigo){

            setError("Seleccione una película");

            return;

        }


        if(!funcion.salaId){

            setError("Seleccione una sala");

            return;

        }


        if(!funcion.fecha){

            setError("Ingrese una fecha");

            return;

        }


        if(!funcion.hora){

            setError("Ingrese una hora");

            return;

        }




        if(funcionSeleccionada){


            dispatch(
                updateFuncion(funcion)
            );


        }else{


            dispatch(
                addFuncion(funcion)
            );


        }



        setFuncion(funcionInicial);


        dispatch(
            selectFuncion(null)
        );


    };





    return (

        <>

            <h2>
                Gestión de Funciones
            </h2>



            <input

                type="text"

                name="id"

                placeholder="ID función"

                value={funcion.id}

                onChange={handleChange}

            />



            <select

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

                type="date"

                name="fecha"

                value={funcion.fecha}

                onChange={handleChange}

            />



            <input

                type="time"

                name="hora"

                value={funcion.hora}

                onChange={handleChange}

            />



            <button onClick={guardarFuncion}>

                Guardar

            </button>



            {
                error &&
                <p style={{color:"red"}}>

                    {error}

                </p>
            }



        </>

    );

}