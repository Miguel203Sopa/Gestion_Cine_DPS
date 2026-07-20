"use client";


import { useAppSelector } from "@/redux/hooks";
import FuncionCard from "./FuncionCard";



export default function Cartelera(){


    const funciones =
        useAppSelector(
            state => state.funciones.funciones
        );



    return (

        <div>


            <h1>
                Cartelera
            </h1>



            {

                funciones.map(
                    funcion => (

                        <FuncionCard

                            key={funcion.id}

                            funcion={funcion}

                        />

                    )

                )

            }


        </div>

    );

}