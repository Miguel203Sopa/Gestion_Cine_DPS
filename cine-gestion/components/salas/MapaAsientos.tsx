"use client";


import { useAppSelector } from "@/redux/hooks";
import { Funcion } from "@/types/Funcion";


interface Props {

     funcion: Funcion;

    asientosSeleccionados: string[];

    setAsientosSeleccionados:
        React.Dispatch<
            React.SetStateAction<string[]>
        >;

}



export default function MapaAsientos({
     funcion,

    asientosSeleccionados,

    setAsientosSeleccionados
}: Props){


    const reservas =
    useAppSelector(
        state => state.reservas.reservas
    );



    
    const asientosOcupados =

    reservas

        .filter(

            reserva =>

                reserva.funcionId === funcion.id

        )

        .flatMap(

            reserva => reserva.asientos

        );


    const salas =
        useAppSelector(
            state => state.salas.salas
        );



    const sala =
        salas.find(
            sala =>
                sala.id === funcion.salaId
        );



    if(!sala){

        return (

            <p>
                No existe la sala asociada
            </p>

        );

    }




    const seleccionarAsiento = (numero:string) => {


        // Si está ocupado no permite seleccionar

        if(asientosOcupados.includes(numero)){

            return;

        }



        if(asientosSeleccionados.includes(numero)){


            setAsientosSeleccionados(

                asientosSeleccionados.filter(

                    asiento => asiento !== numero

                )

            );


        }else{


            setAsientosSeleccionados([

                ...asientosSeleccionados,

                numero

            ]);


        }


    };





    const obtenerEstadoAsiento = (numero:string)=>{


        if(asientosOcupados.includes(numero)){

            return "ocupado";

        }



        if(asientosSeleccionados.includes(numero)){

            return "seleccionado";

        }



        return "libre";

    };






    return (

        <div>


            <h2>
                Sala: {sala.nombre}
            </h2>


            <h3>

                Función:
                {" "}
                {funcion.fecha}
                {" "}
                {funcion.hora}

            </h3>





            <div

                className="mapa-asientos"

                style={{

                    gridTemplateColumns:
                        `repeat(${sala.columnas}, 50px)`

                }}

            >



                {
                    sala.asientos.map(asiento => {


                        const estado =
                            obtenerEstadoAsiento(
                                asiento.numero
                            );



                        return (

                            <button


                                key={asiento.id}


                                className={
                                    `asiento ${estado}`
                                }



                                disabled={
                                    estado === "ocupado"
                                }



                                onClick={() =>
                                    seleccionarAsiento(
                                        asiento.numero
                                    )
                                }


                            >

                                {asiento.numero}


                            </button>

                        );


                    })
                }



            </div>




            <p>

                Asientos seleccionados:
                {" "}

                {
                    asientosSeleccionados.join(", ")
                }

            </p>



        </div>

    );

}