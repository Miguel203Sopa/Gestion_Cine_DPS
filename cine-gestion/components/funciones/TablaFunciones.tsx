"use client";


import { useAppSelector } from "@/redux/hooks";

import FuncionFila from "@/components/funciones/FuncionFila";



export default function TablaFunciones(){


    const funciones =
        useAppSelector(
            state => state.funciones.funciones
        );



    return (

        <>

            <h2>
                Tabla de Funciones
            </h2>


            <table>


                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Película</th>

                        <th>Sala</th>

                        <th>Fecha</th>

                        <th>Hora</th>

                        <th>Acciones</th>

                    </tr>

                </thead>



                <tbody>


                    {
                        funciones.map(funcion => (

                            <FuncionFila

                                key={funcion.id}

                                funcion={funcion}

                            />

                        ))
                    }


                </tbody>


            </table>


        </>

    );


}