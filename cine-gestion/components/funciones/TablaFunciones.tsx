"use client";


import { useAppSelector } from "@/redux/hooks";

import FuncionFila from "@/components/funciones/FuncionFila";

import "./TablaFunciones.css"



export default function TablaFunciones(){


    const funciones =
        useAppSelector(
            state => state.funciones.funciones
        );



    return (
        <div className="contTabla">
              <h2>
                Tabla de Funciones
            </h2>
            <div className="conTfunciones">
                 <table className="tablacont">


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
            </div>
        </div>
    );


}