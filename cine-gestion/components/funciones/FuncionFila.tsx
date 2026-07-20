"use client";


import { Funcion } from "@/types/Funcion";


import { useAppDispatch } from "@/redux/hooks";


import {

    removeFuncion,

    selectFuncion

} from "@/redux/slices/funcionesSlice";



interface Props {

    funcion: Funcion;

}



export default function FuncionFila({

    funcion

}:Props){


    const dispatch =
        useAppDispatch();




    const eliminarFuncion = () => {


        dispatch(
            removeFuncion(funcion.id)
        );


    };



    const editarFuncion = () => {


        dispatch(
            selectFuncion(funcion)
        );


    };





    return (

        <tr>


            <td>
                {funcion.id}
            </td>


            <td>
                {funcion.peliculaCodigo}
            </td>


            <td>
                {funcion.salaId}
            </td>


            <td>
                {funcion.fecha}
            </td>


            <td>
                {funcion.hora}
            </td>



            <td>


                <button onClick={editarFuncion}>

                    Editar

                </button>



                <button onClick={eliminarFuncion}>

                    Eliminar

                </button>

              <button 
                onClick={() => dispatch(selectFuncion(funcion))}
                >
                Ver Asientos
            </button>


            </td>


        </tr>

    );


}